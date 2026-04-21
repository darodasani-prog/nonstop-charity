import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Heart, Home as HomeIcon, Quote, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Button } from '../components/Button';
import { ImpactCard } from '../components/ImpactCard';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

const heroImages = [
  "https://lh3.googleusercontent.com/d/1SuxGzwBtnSr8ugOb6j3CO6Xlawi_m0tj",
  "https://lh3.googleusercontent.com/d/1PZuRLv6RM6-gy0TTHQK7Zh_s6TNKuTdd",
  "https://lh3.googleusercontent.com/d/1Dj63nSZYoP5VbHsKASbirE9euFXZrE5b",
  "https://lh3.googleusercontent.com/d/1aFckyRoF0sn3hFlgyTq7zPX_y9dyCplG",
  "https://lh3.googleusercontent.com/d/1WncElCUZhFC3NWZWOC_tBWig9Qsvlk80",
  "https://lh3.googleusercontent.com/d/15z5tyMlELCBpBatP4EqPO5I_TPcSG25q"
];

const galleryImages = [
  "https://lh3.googleusercontent.com/d/1cKkkgV-LA8L8-otsQObvYQNnCgbQ9oKy",
  "https://lh3.googleusercontent.com/d/1tglv3NlrfMhtKrWayn8-sK6Ot7Py1VK6",
  "https://lh3.googleusercontent.com/d/1ZzrHReQwfCEUFQchP6MQPzabwRuqKvkx",
  "https://lh3.googleusercontent.com/d/1YFGdtWbsjgAJZhrJqqhxjMhmZFLrJhPq",
  "https://lh3.googleusercontent.com/d/1Y3MTJ6QFIwiZ4pDZJpPSul58yHXcRWsD",
  "https://lh3.googleusercontent.com/d/1V3LCplo9aDRcFcIc6N4D6D7ctsfpmAeq",
  "https://lh3.googleusercontent.com/d/1JyhBA0g4dNzMP7P6W5NUAR4iHaEB175h"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = 0;
    const speed = 50; // pixels per second

    const scroll = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (el && !isInteracting.current) {
        // Use a small accumulator to handle sub-pixel scrolling if necessary
        el.scrollLeft += speed * delta;
        
        // Reset to start for seamless loop
        // We use a safe threshold since we duplicated the images multiple times
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 1; // Small offset to avoid jump
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const start = () => { isInteracting.current = true; };
    const end = () => { isInteracting.current = false; };

    el.addEventListener('touchstart', start, { passive: true });
    el.addEventListener('touchend', end);
    el.addEventListener('mousedown', start);
    el.addEventListener('mouseup', end);

    return () => {
      el.removeEventListener('touchstart', start);
      el.removeEventListener('touchend', end);
      el.removeEventListener('mousedown', start);
      el.removeEventListener('mouseup', end);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt="NonStop Charity Impact"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-display font-bold tracking-[0.2em] text-sm uppercase"
            >
              YOUTH-LED. IMPACT-DRIVEN. NONSTOP.
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1]"
            >
              Nigerian Teenagers Fighting Child Poverty, One Meal at a Time
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-100 max-w-xl leading-relaxed"
            >
              Founded in 2019, we've grown from 10 friends to 40 changemakers. 10,000 meals served. Thousands of lives touched. And we're just getting started.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/get-involved">
                <Button size="lg" className="animate-pulse-soft">
                  DONATE NOW →
                </Button>
              </Link>
              <Link to="/impact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
                  SEE OUR IMPACT
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 text-neutral-400 text-sm font-medium"
            >
              <span className="flex items-center gap-2">✓ Registered NGO</span>
              <span className="flex items-center gap-2">✓ 100% Transparency</span>
              <span className="flex items-center gap-2">✓ Tax Deductible</span>
            </motion.div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImageIndex === i ? 'w-8 bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Impact Strip */}
      <section className="bg-secondary py-16 px-6 relative z-20 -mt-10 lg:-mt-20 max-w-6xl mx-auto rounded-3xl shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <Utensils className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-display font-bold text-white">10,000+</h3>
            <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Meals Served</p>
          </div>
          <div className="text-center space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-display font-bold text-white">40</h3>
            <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Active Volunteers</p>
          </div>
          <div className="text-center space-y-2">
            <HomeIcon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-display font-bold text-white">2+</h3>
            <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Orphanages Supported</p>
          </div>
          <div className="text-center space-y-2">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-display font-bold text-white">6</h3>
            <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Years of Service</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/d/1vE3EfTp_0xwYrac9mDtWDyeq9_CBIIiN"
                alt="Youth volunteers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="OUR MISSION"
              title="Age Is Just a Number. Impact Is Our Language."
              subtitle="NonStop Charity is run by teenagers who refuse to wait for 'someday' to change lives. We believe every child deserves dignity, regardless of their parents' bank account."
              className="mb-0"
            />
            <ul className="space-y-6">
              {[
                'Youth-led, adult-mentored structure',
                '100% volunteer-run (no admin fees)',
                'Focus on sustainable, dignity-preserving aid',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium text-neutral-700">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center text-success">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button variant="secondary" size="lg">MEET THE TEAM →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-neutral-100 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="OUR WORK"
            title="Projects That Change Lives"
            subtitle="From feeding thousands during Ramadan to supporting orphanages with essential supplies."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Community Food Drives"
              description="Distributing essential food, clean water, and supplies to children and families in need across our communities."
              image="https://lh3.googleusercontent.com/d/1fb4UWJaaQBhVz6_VBzTF_NCbigIJ1RQb"
              location="Various Communities"
              tag="10,000+ MEALS"
              path="/projects"
            />
            <ProjectCard
              title="Orphanage Outreach"
              description="Regular visits to homes like the Adonai Children Home, bringing joy, supplies, and mentorship to orphaned children."
              image="https://lh3.googleusercontent.com/d/1sb5BI7P1CtXEu0lvE7nEbo7a7cbvj5VY"
              location="Ogun State, Nigeria"
              tag="5+ HOMES VISITED"
              path="/projects"
            />
            <ProjectCard
              title="Rescue A Girl Initiative"
              description="Empowering young women through our 'Pad a Girl' program, providing reusable sanitary pads and health education."
              image="https://lh3.googleusercontent.com/d/10dk3ARtms6ch27lWvvCoeKHBkQ9wR1CC"
              location="Local Schools & Centers"
              tag="GIRLS EMPOWERED"
              path="/projects"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center">
            <Quote className="w-16 h-16 text-accent/20" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-neutral-800 leading-relaxed">
            "The energy these young people bring is infectious. They don't just bring food; they bring hope and a sense of belonging to children who often feel forgotten."
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-neutral-100">
              <img
                src="https://lh3.googleusercontent.com/d/1AAQhzueLwWxbF1z_ov4nRb9BoMLEECue"
                alt="Testimonial author"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-display font-bold text-lg">Sister Mary Adebayo</p>
              <p className="text-neutral-500 text-sm">Director, Hope Orphanage Home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Split */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 bg-primary/5 py-24 px-12 flex flex-col justify-center items-center text-center space-y-8">
          <Heart className="w-16 h-16 text-primary" />
          <h2 className="text-4xl font-display font-bold text-neutral-900">Give</h2>
          <p className="text-lg text-neutral-600 max-w-md">Every ₦1,000 feeds a child. Your contribution goes 100% to our programs.</p>
          <Link to="/get-involved">
            <Button size="lg">DONATE NOW</Button>
          </Link>
        </div>
        <div className="flex-1 bg-secondary py-24 px-12 flex flex-col justify-center items-center text-center space-y-8">
          <Users className="w-16 h-16 text-primary" />
          <h2 className="text-4xl font-display font-bold text-white">Join</h2>
          <p className="text-lg text-white/80 max-w-md">Be part of the 40. We're always looking for passionate teenagers to join our team.</p>
          <Link to="/get-involved">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" size="lg">VOLUNTEER</Button>
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <SectionHeading
            eyebrow="UPDATES"
            title="Latest Stories"
            className="mb-0"
          />
          <Link to="/blog" className="text-primary font-bold hover:underline mb-4 hidden md:block">
            VIEW ALL STORIES →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Meet the Teenagers Running a Nonprofit", date: "Mar 15, 2024", img: "https://lh3.googleusercontent.com/d/1FY8wQBcilPg44rCkLCrvWZrzvIRqseNc" },
            { title: "What 10,000 Meals Looks Like", date: "Feb 28, 2024", img: "https://lh3.googleusercontent.com/d/1bUU9VD31-mlGqKY1zNSZ2EudapafcC1n" },
            { title: "Volunteer Diary: My First Visit", date: "Jan 12, 2024", img: "https://lh3.googleusercontent.com/d/1UkmuquMIlae-2ULBpoJX1pqZYCAOw015" },
          ].map((post, i) => (
            <Link key={i} to="/blog" className="group space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">{post.date}</p>
              <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-32 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <SectionHeading
            eyebrow="GALLERY"
            title="Moments of Impact"
            subtitle="Raw, unfiltered glimpses into our mission across Nigeria."
            className="text-white"
          />
        </div>
        <div 
          ref={scrollRef}
          className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >
          {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="w-80 h-96 shrink-0 rounded-2xl overflow-hidden border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <img src={img} alt="Impact" className="w-full h-full object-cover pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Band */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Join 500+ supporters. No spam, just impact.</h2>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-6 py-4 rounded-full bg-white text-neutral-900 focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <Button className="bg-black border-none hover:bg-neutral-800 text-white">SUBSCRIBE</Button>
          </div>
          <p className="text-white/60 text-sm">Welcome to the movement! ❤️</p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map((p, i) => (
            <span key={i} className="font-display font-bold text-2xl text-neutral-400">{p}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

