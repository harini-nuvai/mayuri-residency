import { motion } from 'framer-motion';
import {
  Wifi, AirVent, ParkingSquare, Utensils, Wine, Coffee,
  Tv, ShieldCheck, BellRing, Car, WashingMachine, Luggage,
  Zap, Shield, Leaf, Building2, Globe, ArrowUpDown,
} from 'lucide-react';
import { amenities } from '../data/hotel';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wifi, AirVent, ParkingSquare, Utensils, Wine, Coffee,
  Tv, ShieldCheck, BellRing, Car, WashingMachine, Luggage,
  Zap, Shield, Leaf, Building2, Globe, Elevator: ArrowUpDown,
};

const categories = [...new Set(amenities.map((a) => a.category))];

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function Amenities() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url(https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Everything You Need</p>
          <h1 className="text-5xl font-serif font-bold text-white">Hotel Amenities</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat} className="mb-14">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl font-serif font-bold text-hotel-dark mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-0.5 bg-hotel-gold" />
                {cat}
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {amenities
                  .filter((a) => a.category === cat)
                  .map((a, i) => {
                    const Icon = iconMap[a.icon] || Wifi;
                    return (
                      <motion.div
                        key={a.label}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                      >
                        <div className="w-12 h-12 rounded-xl bg-hotel-gold/10 flex items-center justify-center mb-3">
                          <Icon size={22} className="text-hotel-gold" />
                        </div>
                        <span className="text-sm font-medium text-hotel-dark">{a.label}</span>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room amenities highlight */}
      <section className="py-16 bg-hotel-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">In-Room Amenities</h2>
          <p className="text-gray-400 mb-10">Every room comes equipped with all essentials for a comfortable stay.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: AirVent,   label: 'Air Conditioning' },
              { icon: Wifi,      label: 'Free Wi-Fi' },
              { icon: Tv,        label: 'Flat-screen TV' },
              { icon: ShieldCheck, label: 'Safe Deposit Box' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <Icon size={28} className="text-hotel-gold mx-auto mb-3" />
                <span className="text-gray-300 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
