import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star, MapPin, Wifi, Car, Utensils, Shield,
  ChevronRight, Phone, ArrowRight,
} from 'lucide-react';
import { hotelInfo, rooms, reviews } from '../data/hotel';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const highlights = [
  { icon: Wifi,     title: 'Free Wi-Fi',       desc: 'High-speed internet in all rooms & common areas' },
  { icon: Utensils, title: 'On-site Dining',   desc: 'Restaurant, Skybar & breakfast options' },
  { icon: Car,      title: 'Free Parking',      desc: 'Secure private parking for all guests' },
  { icon: Shield,   title: '24/7 Security',    desc: 'Round-the-clock security & front desk' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-hotel-dark"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(26,26,46,0.7) 0%, rgba(15,52,96,0.8) 100%), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-hotel-gold text-sm uppercase tracking-[0.3em] mb-4"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Mayuri Residency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-3"
          >
            {hotelInfo.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-10"
          >
            <MapPin size={14} className="text-hotel-gold" />
            <span>Hosur Road, Bengaluru · {hotelInfo.distanceFromCity}</span>
          </motion.div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-hotel-gold" />
                ))}
              </div>
              <span className="text-white font-semibold ml-1">{hotelInfo.rating}</span>
              <span className="text-gray-400 text-sm">({hotelInfo.reviewCount}+ reviews)</span>
            </div>
            <div className="bg-hotel-gold/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-hotel-gold font-semibold text-sm">{hotelInfo.category}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary text-base py-4 px-8">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="btn-outline text-base py-4 px-8 text-white border-white hover:bg-white hover:text-hotel-dark">
              Explore Rooms
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* ── Quick Highlights ── */}
      <section className="py-16 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-hotel-gold/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-hotel-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-hotel-dark text-sm mb-1">{title}</h3>
                  <p className="text-xs text-hotel-muted leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">About Us</p>
              <h2 className="section-title">Experience Comfort &amp; Hospitality</h2>
              <div className="gold-divider ml-0" />
              <p className="text-hotel-muted leading-relaxed mb-6">
                {hotelInfo.description} Whether you're visiting for business or leisure, Mayuri
                Residency ensures a warm, personalized experience every time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Air-conditioned rooms with free Wi-Fi',
                  'On-site restaurant, bar & skybar',
                  'Free private parking & airport transfer',
                  '24-hour front desk & room service',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-hotel-muted">
                    <ChevronRight size={16} className="text-hotel-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=700&q=80"
                alt="Hotel Lobby"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-hotel-gold text-white p-5 rounded-xl shadow-xl">
                <div className="text-3xl font-bold font-serif">10+</div>
                <div className="text-xs uppercase tracking-wide opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Rooms Preview ── */}
      <section className="py-20 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Our Rooms</p>
            <h2 className="section-title">Rooms & Suites</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Thoughtfully designed spaces for your comfort and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md card-hover"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className="absolute top-3 right-3 bg-hotel-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {room.highlight}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-hotel-dark mb-1">{room.name}</h3>
                  <p className="text-xs text-hotel-muted mb-3">
                    {room.area} · {room.bed} · {room.occupancy}
                  </p>
                  <p className="text-sm text-hotel-muted mb-4 line-clamp-2">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-hotel-dark">
                        ₹{room.priceFrom.toLocaleString()}
                      </span>
                      <span className="text-xs text-hotel-muted"> / night</span>
                    </div>
                    <Link to="/contact" className="btn-primary text-sm py-2 px-4">
                      Book
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/rooms" className="btn-outline">
              View All Rooms <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="py-16 bg-hotel-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '140+', label: 'Happy Reviews' },
              { number: '4.4',  label: 'Average Rating' },
              { number: '3',    label: 'Room Categories' },
              { number: '24/7', label: 'Guest Support' },
            ].map(({ number, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="text-4xl font-bold font-serif text-hotel-gold mb-2">{number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="gold-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, i) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-hotel-cream rounded-2xl p-6"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill={j < review.rating ? 'currentColor' : 'none'}
                      className="text-hotel-gold"
                    />
                  ))}
                </div>
                <p className="text-hotel-muted text-sm leading-relaxed mb-4 italic">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hotel-gold text-white flex items-center justify-center text-sm font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-hotel-dark text-sm">{review.name}</div>
                    <div className="text-xs text-hotel-muted">{review.date} · {review.source}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-outline">
              Read All Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.85), rgba(26,26,46,0.85)), url(https://images.unsplash.com/photo-1551882547-ff40c63fe2dc?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Ready for an Unforgettable Stay?
            </h2>
            <p className="text-gray-300 mb-8">
              Book directly with us and enjoy the best rates, flexible policies, and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base py-4 px-8">
                Book Now – From ₹2,000/night
              </Link>
              <a
                href={`tel:${hotelInfo.phone}`}
                className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-hotel-dark transition-all duration-300"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
