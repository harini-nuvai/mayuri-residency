import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { hotelInfo } from '../data/hotel';

const navLinks = [
  { path: '/',          label: 'Home' },
  { path: '/rooms',     label: 'Rooms' },
  { path: '/amenities', label: 'Amenities' },
  { path: '/gallery',   label: 'Gallery' },
  { path: '/location',  label: 'Location' },
  { path: '/about',     label: 'About' },
  { path: '/reviews',   label: 'Reviews' },
  { path: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-hotel-dark shadow-lg';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-bold text-hotel-gold">Mayuri</span>
            <span className="text-white text-xs tracking-[0.2em] uppercase">Residency</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-hotel-gold'
                    : 'text-gray-200 hover:text-hotel-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${hotelInfo.phone}`}
              className="flex items-center gap-2 text-gray-300 hover:text-hotel-gold text-sm transition-colors"
            >
              <Phone size={15} />
              {hotelInfo.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-hotel-dark border-t border-gray-700">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded transition-colors ${
                  location.pathname === link.path
                    ? 'text-hotel-gold bg-white/5'
                    : 'text-gray-200 hover:text-hotel-gold hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-700">
              <Link to="/contact" className="btn-primary w-full justify-center">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
