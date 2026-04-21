import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Footer() {
  const LOGO_IMAGE = "https://lh3.googleusercontent.com/d/1MuJUafcRdxZ3luKEjmi9nbpD6pVyTVdP";

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1: Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={LOGO_IMAGE} 
              alt="NonStop Charity Logo" 
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10"
            />
            <span className="font-display font-bold text-2xl">NonStop Charity</span>
          </Link>
          <p className="text-neutral-400 leading-relaxed">
            A youth-led Nigerian nonprofit fighting child poverty. Age is not a barrier to social change.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-neutral-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/impact" className="hover:text-white transition-colors">Our Impact</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/get-involved" className="hover:text-white transition-colors">Get Involved</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-neutral-400">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+2348023133477" className="hover:text-white transition-colors">+234 802 313 3477</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:hello@nonstopcharity.org" className="hover:text-white transition-colors">hello@nonstopcharity.org</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>Katsina, Nigeria (Operating Nationwide)</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-neutral-400 mb-4">Join 500+ supporters for impact updates.</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition-colors"
            />
            <Button className="w-full">SUBSCRIBE</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
        <p>© 2026 NonStop Charity. Registered NGO. Built with ❤️ by teenagers.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
