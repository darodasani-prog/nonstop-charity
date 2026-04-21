import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export default function Impact() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-secondary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Real Numbers. Real Lives. Real Change.</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">We measure success in smiles served, not just funds raised.</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Meals Served', value: '10,000+' },
            { label: 'Children Supported', value: '2,500+' },
            { label: 'Volunteer Hours', value: '1,200+' },
            { label: 'Communities', value: '4+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 text-center">
              <p className="text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <SectionHeading
          title="Success Stories"
          subtitle="The impact of your donations through the eyes of those we serve."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="group relative overflow-hidden rounded-3xl aspect-video">
            <img
              src="https://lh3.googleusercontent.com/d/1q29nn4hBAs3G0Ws6WOOMB-xTHEPkx2Jc"
              alt="Ramadan project"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-2xl font-display font-bold text-white mb-2">The Ramadan That Fed 10,000</h3>
              <p className="text-white/80">How a group of teenagers organized a massive youth-led feeding drive, starting from Katsina and operating nationwide.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl aspect-video">
            <img
              src="https://lh3.googleusercontent.com/d/1hXzfMOX_lWzxTaAC_xptVVveintnID9A"
              alt="Orphanage visit"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-2xl font-display font-bold text-white mb-2">A Day at Hope Orphanage</h3>
              <p className="text-white/80">Providing stationery and sanitary items to children in need.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
