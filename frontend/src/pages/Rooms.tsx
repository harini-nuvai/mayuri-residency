import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, BedDouble, Maximize, ArrowRight } from 'lucide-react';
import { rooms, policies } from '../data/hotel';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
};

export default function Rooms() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="h-72 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Comfort & Style</p>
          <h1 className="text-5xl font-serif font-bold text-white">Rooms &amp; Suites</h1>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-hotel-gold text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    {room.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-hotel-gold text-xs uppercase tracking-widest mb-2">{room.type} Room</p>
                  <h2 className="text-3xl font-serif font-bold text-hotel-dark mb-4">{room.name}</h2>
                  <p className="text-hotel-muted leading-relaxed mb-6">{room.description}</p>

                  {/* Room specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { Icon: Maximize, label: room.area },
                      { Icon: BedDouble, label: room.bed },
                      { Icon: Users,    label: room.occupancy },
                    ].map(({ Icon, label }) => (
                      <div key={label} className="text-center p-3 bg-hotel-cream rounded-xl">
                        <Icon size={20} className="text-hotel-gold mx-auto mb-1" />
                        <span className="text-xs text-hotel-muted">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {room.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-hotel-muted">
                        <CheckCircle size={14} className="text-hotel-gold shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-hotel-dark">
                        ₹{room.priceFrom.toLocaleString()}
                      </span>
                      <span className="text-hotel-muted text-sm"> – ₹{room.priceTo.toLocaleString()} / night</span>
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Book Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-hotel-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
            Hotel Policies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies.map(({ label, value }) => (
              <div key={label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-hotel-gold text-xs uppercase tracking-wider mb-1">{label}</div>
                <div className="text-white text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
