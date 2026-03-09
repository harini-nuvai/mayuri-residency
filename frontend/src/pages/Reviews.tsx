import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews, hotelInfo } from '../data/hotel';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Reviews() {
  const avgRating = hotelInfo.rating;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url(https://images.unsplash.com/photo-1549294413-26f195200c16?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-hotel-gold text-sm uppercase tracking-widest mb-3">Guest Voices</p>
          <h1 className="text-5xl font-serif font-bold text-white">Reviews</h1>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-14 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div>
              <div className="text-8xl font-bold font-serif text-hotel-dark">{avgRating}</div>
              <div className="flex justify-center mt-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill={i < Math.floor(avgRating) ? 'currentColor' : 'none'}
                    className="text-hotel-gold"
                  />
                ))}
              </div>
              <p className="text-hotel-muted text-sm">Based on {hotelInfo.reviewCount}+ reviews</p>
            </div>

            <div className="space-y-2 w-full max-w-xs">
              {[
                { label: 'Excellent', pct: 70, stars: 5 },
                { label: 'Good',      pct: 20, stars: 4 },
                { label: 'Average',   pct: 7,  stars: 3 },
                { label: 'Poor',      pct: 3,  stars: 2 },
              ].map(({ label, pct, stars }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="w-16 text-right text-hotel-muted">{label}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-hotel-gold rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-hotel-muted w-8">{stars}★</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              {[
                { label: 'Cleanliness',  score: '4.5' },
                { label: 'Location',     score: '4.3' },
                { label: 'Service',      score: '4.6' },
                { label: 'Value',        score: '4.4' },
              ].map(({ label, score }) => (
                <div key={label} className="bg-hotel-cream rounded-xl p-3">
                  <div className="text-xl font-bold text-hotel-dark">{score}</div>
                  <div className="text-xs text-hotel-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-hotel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-hotel-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={15}
                      fill={j < review.rating ? 'currentColor' : 'none'}
                      className="text-hotel-gold"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-hotel-muted text-sm leading-relaxed mb-5 italic flex-1">
                  "{review.comment}"
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-hotel-gold flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-hotel-dark text-sm">{review.name}</p>
                    <p className="text-xs text-hotel-muted">{review.date} · {review.source}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-14 bg-hotel-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Share Your Experience</h2>
          <p className="text-gray-400 mb-8">
            Stayed with us? We'd love to hear your feedback. Your review helps us improve and helps
            future guests make their decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/Mayuri+Residency+-+BTM+Layout/@12.9164386,77.5807023,14z/data=!4m22!1m10!3m9!1s0x3bae714893cfc14f:0x65e2210d79d6baed!2sMayuri+Residency+Hotel+-+The+Premier+Hotel!5m2!4m1!1i2!8m2!3d12.7865827!4d77.7485632!16s%2Fg%2F11v69szcjn!3m10!1s0x3bae1573ce57a88f:0x55e8d58cb92f2185!5m2!4m1!1i2!8m2!3d12.9164305!4d77.6057846!9m1!1b1!16s%2Fg%2F11x5jhlyy8?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Star size={16} />
              Write a Review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
