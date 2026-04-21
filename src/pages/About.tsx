import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/d/1r7CVnRo6seTPlc-sQBXAI0dj82QvoGtd"
            alt="Team"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
            We're Not Waiting for Permission to Change the World
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading
              eyebrow="OUR STORY"
              title="From 10 Friends to a Movement"
              subtitle="Founded in 2019 in Katsina, Nigeria, NonStop Charity began with a simple observation: children in our communities were suffering, and we couldn't wait until we were 'adults' to help."
            />
            <div className="space-y-12 mt-12">
              {[
                { year: '2019', title: 'The Beginning', desc: '10 friends, one idea, and a shared passion for social change, starting from Katsina and operating nationwide.' },
                { year: '2021', title: '10,000 Meals', desc: 'Our Ramadan project breakthrough fed thousands and gained national attention.' },
                { year: '2024', title: 'The Future', desc: 'Scaling to 40 members and formalizing our structure for greater impact.' },
              ].map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    {i !== 2 && <div className="w-px h-full bg-neutral-200 mt-2" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">{milestone.title}</h3>
                    <p className="text-neutral-600">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-neutral-100">
            <h3 className="text-2xl font-display font-bold mb-6">Why We Exist</h3>
            <div className="space-y-8">
              <div className="p-6 bg-primary/5 rounded-2xl">
                <p className="text-primary font-bold text-3xl mb-2">11 Million</p>
                <p className="text-neutral-700">Nigerian children are out of school. Poverty cycles continue without intervention.</p>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                We provide immediate relief while advocating for systemic change. Run by youth who understand the urgency, we focus on dignity-preserving aid that empowers communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Compassion', 'Transparency', 'Youth Power', 'Sustainability'].map((val, i) => (
                  <div key={i} className="p-4 border border-neutral-100 rounded-xl text-center font-bold text-neutral-700">
                    {val}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <SectionHeading
            eyebrow="THE TEAM"
            title="Faces Behind the Action"
            subtitle="Meet the youth changemakers leading NonStop Charity."
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Team Member 1", role: "Co-Founder", img: "https://lh3.googleusercontent.com/d/1ZzrHReQwfCEUFQchP6MQPzabwRuqKvkx" },
            { name: "Team Member 2", role: "Project Coordinator", img: "https://lh3.googleusercontent.com/d/1tglv3NlrfMhtKrWayn8-sK6Ot7Py1VK6" },
            { name: "Team Member 3", role: "Logistics", img: "https://lh3.googleusercontent.com/d/1YFGdtWbsjgAJZhrJqqhxjMhmZFLrJhPq" },
            { name: "Team Member 4", role: "Communications", img: "https://lh3.googleusercontent.com/d/1WncElCUZhFC3NWZWOC_tBWig9Qsvlk80" }
          ].map((member, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-white font-display font-bold text-xl">{member.name}</p>
                <p className="text-secondary font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
