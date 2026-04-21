import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export default function Transparency() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Open Books. Open Hearts.</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">We believe you deserve to know exactly how your donations are used.</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
            <h3 className="text-xl font-display font-bold mb-6">100% Policy</h3>
            <p className="text-neutral-600 leading-relaxed">
              Every kobo donated by individuals goes directly to our field projects. Our administrative costs are covered by specific corporate sponsors and our own fundraising events.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
            <h3 className="text-xl font-display font-bold mb-6">Annual Reports</h3>
            <div className="space-y-4">
              {['2023 Impact Report', '2022 Financial Summary', '2021 Audit Report'].map((report, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-primary/5 hover:text-primary transition-all font-bold">
                  {report}
                  <span className="text-xs uppercase tracking-widest">PDF</span>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
            <h3 className="text-xl font-display font-bold mb-6">Governance</h3>
            <p className="text-neutral-600 leading-relaxed">
              While we are youth-led, we are mentored by an Adult Advisory Board of legal and financial professionals who ensure strict accountability.
            </p>
          </div>
        </div>

        <div className="bg-secondary rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Expense Breakdown (2023)</h2>
              <div className="space-y-6">
                {[
                  { label: 'Food & Supplies', value: 75, color: 'bg-primary' },
                  { label: 'Logistics', value: 15, color: 'bg-accent' },
                  { label: 'Admin', value: 10, color: 'bg-success' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className={cn('h-full rounded-full', item.color)} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg text-white/80 mb-8">
                "Transparency isn't just a policy for us; it's the foundation of our relationship with our supporters."
              </p>
              <p className="font-display font-bold text-xl">— Financial Lead, NonStop Charity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
