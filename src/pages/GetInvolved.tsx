import { motion } from 'framer-motion';
import { Heart, Send, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer'>('donate');

  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex p-1 bg-white rounded-full shadow-sm mb-12">
            <button
              onClick={() => setActiveTab('donate')}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-display font-bold transition-all ${
                activeTab === 'donate' ? 'bg-primary text-white shadow-lg' : 'text-neutral-500 hover:text-primary'
              }`}
            >
              <Heart className="w-5 h-5" />
              DONATE
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-display font-bold transition-all ${
                activeTab === 'volunteer' ? 'bg-secondary text-white shadow-lg' : 'text-neutral-500 hover:text-secondary'
              }`}
            >
              <Users className="w-5 h-5" />
              VOLUNTEER
            </button>
          </div>

          {activeTab === 'donate' ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <SectionHeading
                title="Your ₦1,000 = 1 Meal for a Child"
                subtitle="100% of donations go directly to our programs. No administrative fees deducted."
                centered
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { amount: '1,000', impact: 'Feeds 1 child' },
                  { amount: '5,000', impact: 'Feeds 5 children' },
                  { amount: '10,000', impact: 'School supplies for 2' },
                  { amount: '25,000', impact: 'Community support' },
                  { amount: '50,000', impact: 'Major impact' },
                  { amount: 'Custom', impact: 'Any amount helps' },
                ].map((tier, i) => (
                  <button
                    key={i}
                    className="p-8 bg-white rounded-3xl border-2 border-transparent hover:border-primary transition-all text-center group shadow-sm"
                  >
                    <p className="text-3xl font-display font-bold text-neutral-900 mb-2 group-hover:text-primary">
                      {tier.amount !== 'Custom' ? `₦${tier.amount}` : 'Custom'}
                    </p>
                    <p className="text-neutral-500 font-medium">{tier.impact}</p>
                  </button>
                ))}
              </div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">Select Donation Method</h3>
                  <p className="text-neutral-500">Every Naira counts toward changing a child's story.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Option 1: Paystack */}
                  <div className="p-6 rounded-2xl border-2 border-neutral-50 flex flex-col justify-between bg-neutral-50/30">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-1">
                          <img 
                            src="https://paystack.com/favicon.png" 
                            alt="Paystack Logo" 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-xl text-primary">Paystack</h4>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Fast and secure payments using your Debit/Credit Card, Bank Transfer, or USSD.
                      </p>
                    </div>
                    <Button className="w-full">DONATE VIA PAYSTACK</Button>
                  </div>

                  {/* Option 2: Paysabil */}
                  <div className="p-6 rounded-2xl border-2 border-neutral-50 flex flex-col justify-between bg-neutral-50/30">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-1">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1iqrz_PieF8xZTwi4O3RGB9D1pyYZSXlx" 
                            alt="Paysabil Logo" 
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-xl text-secondary">Paysabil</h4>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        International and local donations via the Paysabil portal.
                      </p>
                      <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-500 italic">
                        <span className="text-primary font-bold not-italic">Instructions:</span> After clicking, please search for <span className="font-bold text-neutral-900">"NonStop Charity"</span> in the organization list.
                      </div>
                    </div>
                    <a 
                      href="https://www.paysabil.com/list-of-organization.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                        DONATE ON PAYSABIL
                      </Button>
                    </a>
                  </div>
                </div>
                <p className="mt-8 text-neutral-400 text-xs text-center">
                  By donating, you agree to our terms of service and privacy policy. 100% of your gift goes to the field.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <SectionHeading
                title="Join 40 Teenagers Changing Nigeria"
                subtitle="No experience needed. Just passion and commitment."
                centered
              />
              <form className="bg-white p-10 rounded-3xl shadow-xl border border-neutral-100 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Why do you want to join?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" />
                </div>
                <Button variant="secondary" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  SUBMIT APPLICATION
                </Button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
