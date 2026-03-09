import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Clock, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const values = [
  { icon: Heart,  title: 'Warm Hospitality', desc: 'Every guest is treated like family. Our staff are trained to exceed expectations with genuine care.' },
  { icon: Award,  title: 'Quality Standards', desc: 'We maintain the highest standards in cleanliness, comfort, and service across every touchpoint.' },
  { icon: Users,  title: 'Guest Satisfaction', desc: 'With 4.4/5 from 140+ reviews, our guests speak for our commitment to an exceptional experience.' },
  { icon: Clock,  title: 'Always Available', desc: '24-hour front desk and room service ensures your needs are met any time of day or night.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url(https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-5xl font-serif font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/gallery/lobby-wide.jpg"
                alt="Mayuri Residency Hotel"
                className="rounded-2xl w-full object-cover h-[450px] shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-hotel-gold text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold font-serif">4.4★</div>
                <div className="text-sm opacity-90 mt-1">Guest Rating</div>
                <div className="text-xs opacity-75">140+ Reviews</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-4xl font-serif font-bold text-hotel-dark mb-4">
                A Legacy of Comfort in Bengaluru
              </h2>
              <div className="gold-divider ml-0" />
              <p className="text-hotel-muted leading-relaxed mb-5">
                Mayuri Residency was founded with a simple mission — to offer every traveler a place that
                feels like home, yet delivers the professional service of a hotel. Nestled on Hosur Road
                in Bengaluru, we've been welcoming guests from across India and the world.
              </p>
              <p className="text-hotel-muted leading-relaxed mb-5">
                Our 3-star property combines modern amenities with personal warmth. From our air-conditioned
                rooms to our on-site restaurant and skybar, every detail is crafted to ensure your stay is
                comfortable, convenient, and memorable.
              </p>
              <p className="text-hotel-muted leading-relaxed mb-8">
                Whether you're a business traveler looking for a reliable base, a family exploring the city,
                or a couple seeking a comfortable retreat — Mayuri Residency is your ideal home in Bengaluru.
              </p>
              <Link to="/contact" className="btn-primary">
                Book Your Stay <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="section-title">What Drives Us</h2>
            <div className="gold-divider" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-hotel-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-hotel-gold" />
                </div>
                <h3 className="font-serif font-bold text-hotel-dark text-lg mb-3">{title}</h3>
                <p className="text-hotel-muted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Gallery Strip */}
      <section className="py-16 bg-hotel-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-white">A Glance at Mayuri Residency</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '/gallery/exterior-night.jpg',
              '/gallery/room-twin-2.jpg',
              '/gallery/lobby-reception.jpg',
              '/gallery/room-double.jpg',
            ].map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden h-44">
                <img src={url} alt="Hotel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
