import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Pool } from 'pg';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(helmet({ contentSecurityPolicy: false }));
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173'];
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '10kb' }));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('localhost')
    ? { rejectUnauthorized: false }
    : false,
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      check_in TEXT NOT NULL,
      check_out TEXT NOT NULL,
      room_type TEXT NOT NULL,
      adults TEXT NOT NULL,
      children TEXT NOT NULL DEFAULT '0',
      message TEXT,
      status TEXT DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendBookingEmail(booking: {
  id: number;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  adults: string;
  children: string;
  message: string;
}) {
  const roomLabels: Record<string, string> = {
    'deluxe-double': 'Deluxe Double Room – ₹2,645+',
    'twin':          'Twin Room – ₹3,040+',
    'deluxe-suite':  'Deluxe Suite – ₹3,040+',
  };

  await resend.emails.send({
    from: 'Mayuri Residency Bookings <onboarding@resend.dev>',
    to: process.env.NOTIFY_EMAIL!,
    subject: `New Booking Request #${booking.id} – ${booking.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden">
        <div style="background:#1a1a2e;padding:24px;text-align:center">
          <h1 style="color:#c9a84c;margin:0;font-size:22px">Mayuri Residency</h1>
          <p style="color:#fff;margin:6px 0 0;font-size:13px">New Booking Request</p>
        </div>
        <div style="padding:28px">
          <p style="margin:0 0 20px;font-size:15px;color:#333">Booking request #${booking.id} submitted:</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="background:#f9f6f0"><td style="padding:10px 14px;font-weight:bold;color:#555;width:40%">Full Name</td><td style="padding:10px 14px;color:#222">${booking.name}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;color:#555">Email</td><td style="padding:10px 14px;color:#222">${booking.email}</td></tr>
            <tr style="background:#f9f6f0"><td style="padding:10px 14px;font-weight:bold;color:#555">Phone</td><td style="padding:10px 14px;color:#222">${booking.phone}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;color:#555">Room Type</td><td style="padding:10px 14px;color:#222">${roomLabels[booking.roomType] ?? booking.roomType}</td></tr>
            <tr style="background:#f9f6f0"><td style="padding:10px 14px;font-weight:bold;color:#555">Check-in</td><td style="padding:10px 14px;color:#222">${booking.checkIn}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;color:#555">Check-out</td><td style="padding:10px 14px;color:#222">${booking.checkOut}</td></tr>
            <tr style="background:#f9f6f0"><td style="padding:10px 14px;font-weight:bold;color:#555">Adults</td><td style="padding:10px 14px;color:#222">${booking.adults}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;color:#555">Children</td><td style="padding:10px 14px;color:#222">${booking.children}</td></tr>
            <tr style="background:#f9f6f0"><td style="padding:10px 14px;font-weight:bold;color:#555;vertical-align:top">Special Requests</td><td style="padding:10px 14px;color:#222">${booking.message || '—'}</td></tr>
          </table>
          <div style="margin-top:24px;padding:14px;background:#fffbf0;border-left:4px solid #c9a84c;border-radius:4px;font-size:13px;color:#555">
            Booking ID: <strong>#${booking.id}</strong> &nbsp;|&nbsp; Status: <strong>Pending</strong>
          </div>
        </div>
      </div>
    `,
  });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(val: unknown, maxLen = 300): string {
  return String(val ?? '').trim().slice(0, maxLen);
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/booking', async (req, res) => {
  const { name, email, phone, checkIn, checkOut, roomType, adults, children, message } = req.body as Record<string, unknown>;

  if (!name || !email || !phone || !checkIn || !checkOut || !roomType || !adults || children === undefined) {
    res.status(400).json({ error: 'All required fields must be provided.' });
    return;
  }

  const emailStr = clean(email);
  if (!isValidEmail(emailStr)) {
    res.status(400).json({ error: 'Invalid email address.' });
    return;
  }

  if (new Date(clean(checkIn)) >= new Date(clean(checkOut))) {
    res.status(400).json({ error: 'Check-out must be after check-in date.' });
    return;
  }

  try {
    const result = await pool.query(
      `INSERT INTO bookings (name, email, phone, check_in, check_out, room_type, adults, children, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`,
      [clean(name), emailStr, clean(phone, 20), clean(checkIn, 20), clean(checkOut, 20),
       clean(roomType, 50), clean(adults, 5), clean(children, 5), clean(message, 1000)]
    );

    const bookingId = result.rows[0].id;
    console.log(`[Booking #${bookingId}] ${clean(name)} — ${emailStr}`);

    sendBookingEmail({
      id: bookingId, name: clean(name), email: emailStr,
      phone: clean(phone, 20), checkIn: clean(checkIn, 20), checkOut: clean(checkOut, 20),
      roomType: clean(roomType, 50), adults: clean(adults, 5),
      children: clean(children, 5), message: clean(message, 1000),
    }).catch(err => console.error('[Email error]', err));

    res.status(201).json({ success: true, bookingId, message: 'Booking request received! We will confirm within 2 to 4 hours.' });
  } catch (err) {
    console.error('[DB error]', err);
    res.status(500).json({ error: 'Failed to save booking. Please try again.' });
  }
});

app.get('/api/bookings', async (_req, res) => {
  const result = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
  res.json(result.rows);
});

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Mayuri Residency backend on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to init DB:', err);
  process.exit(1);
});
