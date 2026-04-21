import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <SectionHeading
              eyebrow="CONTACT US"
              title="Let's Connect"
              subtitle="Have a question about donations, partnerships, or volunteering? We'd love to hear from you."
            />
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg mb-1">Call Us</p>
                  <a href="tel:+2348023133477" className="text-neutral-600 hover:text-primary transition-colors">+234 802 313 3477</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg mb-1">Email Us</p>
                  <a href="mailto:hello@nonstopcharity.org" className="text-neutral-600 hover:text-primary transition-colors">hello@nonstopcharity.org</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg mb-1">Visit Us</p>
                  <p className="text-neutral-600">Katsina, Nigeria (Operating Nationwide)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="bg-white p-10 rounded-3xl shadow-xl border border-neutral-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white">
                  <option>General Inquiry</option>
                  <option>Donation Question</option>
                  <option>Partnership Proposal</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="How can we help?" />
              </div>
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
