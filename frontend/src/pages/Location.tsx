import { motion } from 'framer-motion';
import {
  MapPin, Flower2, ShoppingBag, TreePine, Castle,
  Train, Bus, Navigation, Plane, Car,
} from 'lucide-react';
import { hotelInfo, nearbyAttractions } from '../data/hotel';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Flower2, ShoppingBag, TreePine, Castle, Train, Bus, Navigation, Plane,
};

const typeColors: Record<string, string> = {
  Nature:    'bg-green-100 text-green-700',
  Shopping:  'bg-purple-100 text-purple-700',
  Heritage:  'bg-amber-100 text-amber-700',
  Transport: 'bg-blue-100 text-blue-700',
  Landmark:  'bg-red-100 text-red-700',
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Location() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url(https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Find Us</p>
          <h1 className="text-5xl font-serif font-bold text-white">Location</h1>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Address info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-hotel-dark mb-4">Our Address</h2>
                <div className="gold-divider ml-0" />
              </div>
              <div className="flex gap-3">
                <MapPin size={20} className="text-hotel-gold shrink-0 mt-1" />
                <div>
                  <p className="text-hotel-dark font-medium">{hotelInfo.name}</p>
                  <p className="text-hotel-muted text-sm mt-1 leading-relaxed">
                    {hotelInfo.address.line1}<br />
                    {hotelInfo.address.line2}<br />
                    {hotelInfo.address.line3}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'From City Center', value: hotelInfo.distanceFromCity },
                  { label: 'Nearest Landmark', value: hotelInfo.landmark },
                  { label: 'Nearest Airport',  value: hotelInfo.airport },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-hotel-cream rounded-xl p-4">
                    <div className="text-xs text-hotel-muted uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-hotel-dark text-sm font-medium">{value}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.app.goo.gl/9EfbeMVo3DdrauJR8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                  title="Mayuri Residency Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1234!2d77.692200!3d12.783300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6e8a3c000001%3A0x1234567890abcdef!2sMayuri%20Residency!5e0!3m2!1sen!2sin!4v1620000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Explore</p>
            <h2 className="section-title">Places Near Mayuri Residency</h2>
            <div className="gold-divider" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nearbyAttractions.map((place, i) => {
              const Icon = iconMap[place.icon] || MapPin;
              const colorClass = typeColors[place.type] || 'bg-gray-100 text-gray-700';
              return (
                <motion.div
                  key={place.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-hotel-gold/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-hotel-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hotel-dark text-sm mb-1">{place.name}</h3>
                    <p className="text-hotel-muted text-xs mb-2">{place.distance}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorClass}`}>
                      {place.type}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-12 bg-hotel-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-8">Transportation Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Plane,  label: 'Airport Transfer', desc: 'Kempegowda Airport (~65 km) — we arrange pickup' },
              { icon: Bus,    label: 'Bus Services',     desc: 'Madiwala Bus Stop – 2.9 km | Silk Board – 2.7 km' },
              { icon: Car,    label: 'Private Parking',  desc: 'Free secure private parking on premises' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <Icon size={28} className="text-hotel-gold mx-auto mb-3" />
                <h3 className="text-white font-semibold text-sm mb-2">{label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
