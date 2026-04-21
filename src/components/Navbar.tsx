import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';
import { Heart, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Impact', path: '/impact' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Transparency', path: '/transparency' },
  { name: 'Contact', path: '/contact' },
];

const LOGO_IMAGE = "https://lh3.googleusercontent.com/d/1MuJUafcRdxZ3luKEjmi9nbpD6pVyTVdP";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={LOGO_IMAGE} 
            alt="NonStop Charity Logo" 
            referrerPolicy="no-referrer"
            className="w-14 h-14 rounded-xl shadow-xl object-cover border-2 border-white"
          />
          <span className="font-display font-bold text-2xl hidden sm:block">
            NonStop <span className="text-primary">Charity</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-display font-medium text-sm tracking-wide transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-neutral-900'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/get-involved">
            <Button size="sm" className="animate-pulse-soft">
              <Heart className="w-4 h-4 mr-2 fill-current" />
              DONATE NOW
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-neutral-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={cn(
          'absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-6 lg:hidden',
          !isMobileMenuOpen && 'pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="font-display font-bold text-2xl text-neutral-900"
          >
            {link.name}
          </Link>
        ))}
        <div className="h-px bg-neutral-100" />
        <div className="flex flex-col gap-4">
          <a
            href="tel:+2348023133477"
            className="flex items-center gap-3 font-display font-medium text-secondary"
          >
            <Phone className="w-5 h-5" />
            +234 802 313 3477
          </a>
          <Link to="/get-involved">
            <Button className="w-full">DONATE NOW</Button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
