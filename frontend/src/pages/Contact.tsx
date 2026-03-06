import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, CheckCircle, Loader } from 'lucide-react';
import { hotelInfo } from '../data/hotel';

const bookingSchema = z.object({
  name:      z.string().min(2,  'Name must be at least 2 characters'),
  email:     z.string().email('Please enter a valid email address'),
  phone:     z.string().min(10, 'Please enter a valid phone number'),
  checkIn:   z.string().min(1,  'Check-in date is required'),
  checkOut:  z.string().min(1,  'Check-out date is required'),
  roomType:  z.string().min(1,  'Please select a room type'),
  adults:    z.string().min(1,  'Number of adults is required'),
  message:   z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingForm>({ resolver: zodResolver(bookingSchema) });

  const onSubmit = async (data: BookingForm) => {
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
      reset();
    } catch {
      setServerError('Something went wrong. Please call us directly or try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (error?: { message?: string }) =>
    `w-full px-4 py-3 border rounded-xl text-hotel-dark text-sm focus:outline-none focus:ring-2 focus:ring-hotel-gold transition-all ${
      error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
    }`;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url(https://images.unsplash.com/photo-1551882547-ff40c63fe2dc?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-5xl font-serif font-bold text-white">Contact &amp; Booking</h1>
        </div>
      </section>

      <section className="py-16 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-hotel-dark mb-4">Contact Info</h2>
                <div className="gold-divider ml-0" />
              </div>

              {[
                { icon: MapPin, label: 'Address', value: hotelInfo.address.full, href: undefined },
                { icon: Phone,  label: 'Phone',   value: hotelInfo.phone,  href: `tel:${hotelInfo.phone}` },
                { icon: Mail,   label: 'Email',   value: hotelInfo.email,  href: `mailto:${hotelInfo.email}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-hotel-gold/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-hotel-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-hotel-muted uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-hotel-dark hover:text-hotel-gold transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-hotel-dark leading-relaxed">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white rounded-2xl p-5 hover:bg-green-600 transition-colors"
              >
                <MessageSquare size={20} />
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs opacity-90">Quick response guaranteed</p>
                </div>
              </a>

              {/* Check-in/out info */}
              <div className="bg-hotel-dark rounded-2xl p-5 text-white">
                <h3 className="font-semibold mb-4 text-hotel-gold">Quick Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Check-in</span>
                    <span>{hotelInfo.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Check-out</span>
                    <span>{hotelInfo.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Starting from</span>
                    <span className="text-hotel-gold font-bold">₹2,000/night</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-hotel-dark mb-3">
                      Booking Request Received!
                    </h3>
                    <p className="text-hotel-muted mb-6">
                      Thank you for choosing Mayuri Residency. Our team will confirm your booking
                      within 2–4 hours via email or phone.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-hotel-dark mb-2">
                      Booking Request Form
                    </h2>
                    <p className="text-hotel-muted text-sm mb-8">
                      Fill in the details below and we'll confirm your stay within 2–4 hours.
                    </p>

                    {serverError && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        {serverError}
                      </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Full Name *
                          </label>
                          <input
                            {...register('name')}
                            placeholder="John Doe"
                            className={inputClass(errors.name)}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Email Address *
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="john@example.com"
                            className={inputClass(errors.email)}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            {...register('phone')}
                            placeholder="+91 98765 43210"
                            className={inputClass(errors.phone)}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Room Type *
                          </label>
                          <select
                            {...register('roomType')}
                            className={inputClass(errors.roomType)}
                          >
                            <option value="">Select a room</option>
                            <option value="deluxe-double">Deluxe Double Room – ₹2,000+</option>
                            <option value="deluxe-twin">Deluxe Twin Room – ₹2,200+</option>
                            <option value="family-executive">Family Executive Room – ₹3,000+</option>
                          </select>
                          {errors.roomType && (
                            <p className="text-red-500 text-xs mt-1">{errors.roomType.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Check-in Date *
                          </label>
                          <input
                            {...register('checkIn')}
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className={inputClass(errors.checkIn)}
                          />
                          {errors.checkIn && (
                            <p className="text-red-500 text-xs mt-1">{errors.checkIn.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Check-out Date *
                          </label>
                          <input
                            {...register('checkOut')}
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className={inputClass(errors.checkOut)}
                          />
                          {errors.checkOut && (
                            <p className="text-red-500 text-xs mt-1">{errors.checkOut.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                            Adults *
                          </label>
                          <select
                            {...register('adults')}
                            className={inputClass(errors.adults)}
                          >
                            <option value="">Select</option>
                            <option value="1">1 Adult</option>
                            <option value="2">2 Adults</option>
                            <option value="3">3 Adults</option>
                            <option value="4">4 Adults</option>
                          </select>
                          {errors.adults && (
                            <p className="text-red-500 text-xs mt-1">{errors.adults.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-hotel-dark mb-1.5">
                          Special Requests / Message
                        </label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          placeholder="Any special requirements? Late check-in, dietary needs, anniversary celebration..."
                          className={`${inputClass()} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader size={18} className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Booking Request'
                        )}
                      </button>

                      <p className="text-xs text-center text-hotel-muted">
                        By submitting, you agree to our booking policies. We'll contact you within 2–4 hours to confirm.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
