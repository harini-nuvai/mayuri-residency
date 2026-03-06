import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, Instagram, Facebook, Twitter } from 'lucide-react';
import { hotelInfo } from '../data/hotel';

const quickLinks = [
  { path: '/',          label: 'Home' },
  { path: '/rooms',     label: 'Rooms & Suites' },
  { path: '/amenities', label: 'Amenities' },
  { path: '/gallery',   label: 'Gallery' },
  { path: '/location',  label: 'Location' },
  { path: '/about',     label: 'About Us' },
  { path: '/reviews',   label: 'Reviews' },
  { path: '/contact',   label: 'Contact & Booking' },
];

export default function Footer() {
  return (
    <footer className="bg-hotel-dark text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-hotel-gold">Mayuri</span>
              <span className="text-white text-sm tracking-[0.2em] uppercase block">Residency</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              A comfortable 3-star hotel in Bengaluru offering modern rooms, dining facilities, and
              convenient access to major city attractions.
            </p>
            <div className="flex items-center gap-2 text-hotel-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(hotelInfo.rating) ? 'currentColor' : 'none'}
                />
              ))}
              <span className="text-gray-400 text-sm ml-1">
                {hotelInfo.rating} / 5 ({hotelInfo.reviewCount}+ reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-hotel-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Hotel Policies
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Check-in</span>
                <span className="text-white">{hotelInfo.checkIn}</span>
              </li>
              <li className="flex justify-between">
                <span>Check-out</span>
                <span className="text-white">{hotelInfo.checkOut}</span>
              </li>
              <li className="flex justify-between">
                <span>Min. Age</span>
                <span className="text-white">18 years</span>
              </li>
              <li className="flex justify-between">
                <span>Pets</span>
                <span className="text-white">Not Allowed</span>
              </li>
              <li className="flex justify-between">
                <span>Valid ID</span>
                <span className="text-white">Required</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-hotel-gold mt-1 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  {hotelInfo.address.full}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-hotel-gold shrink-0" />
                <a
                  href={`tel:${hotelInfo.phone}`}
                  className="text-sm text-gray-400 hover:text-hotel-gold transition-colors"
                >
                  {hotelInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-hotel-gold shrink-0" />
                <a
                  href={`mailto:${hotelInfo.email}`}
                  className="text-sm text-gray-400 hover:text-hotel-gold transition-colors"
                >
                  {hotelInfo.email}
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook,  href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter,   href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-hotel-gold hover:border-hotel-gold transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mayuri Residency. All rights reserved.</p>
          <p>Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
