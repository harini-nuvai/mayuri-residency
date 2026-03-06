import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Database from 'better-sqlite3';
import path from 'path';

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json({ limit: '10kb' }));

const db = new Database(path.join(process.cwd(), 'bookings.db'));

db.prepare(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    check_in TEXT NOT NULL,
    check_out TEXT NOT NULL,
    room_type TEXT NOT NULL,
    adults TEXT NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT (datetime('now'))
  )
`).run();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(val: unknown, maxLen = 300): string {
  return String(val ?? '').trim().slice(0, maxLen);
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/booking', (req, res) => {
  const { name, email, phone, checkIn, checkOut, roomType, adults, message } = req.body as Record<string, unknown>;

  if (!name || !email || !phone || !checkIn || !checkOut || !roomType || !adults) {
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

  const stmt = db.prepare(
    `INSERT INTO bookings (name, email, phone, check_in, check_out, room_type, adults, message)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  );

  const result = stmt.run(
    clean(name), emailStr, clean(phone, 20),
    clean(checkIn, 20), clean(checkOut, 20),
    clean(roomType, 50), clean(adults, 5), clean(message, 1000)
  );

  console.log(`[Booking #${result.lastInsertRowid}] ${clean(name)} — ${emailStr}`);

  res.status(201).json({
    success: true,
    bookingId: result.lastInsertRowid,
    message: 'Booking request received! We will confirm within 2 to 4 hours.',
  });
});

app.get('/api/bookings', (_req, res) => {
  const rows = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
  res.json(rows);
});

app.use(express.static(path.join(process.cwd(), '..', 'frontend', 'dist')));
app.get('/{*path}', (_req, res) => {
  res.sendFile(path.join(process.cwd(), '..', 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Mayuri Residency backend on http://localhost:${PORT}`);
});
