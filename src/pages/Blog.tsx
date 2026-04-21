import { SectionHeading } from '../components/SectionHeading';

const posts = [
  {
    title: "Meet the Teenagers Running a Nonprofit",
    excerpt: "How 10 friends in Katsina started a movement that is now 40 members strong.",
    date: "March 15, 2024",
    category: "FOUNDER STORY",
    image: "https://lh3.googleusercontent.com/d/1FY8wQBcilPg44rCkLCrvWZrzvIRqseNc"
  },
  {
    title: "What 10,000 Meals Looks Like",
    excerpt: "A visual journey through our Ramadan 2021 project that touched thousands of lives.",
    date: "Feb 28, 2024",
    category: "IMPACT",
    image: "https://lh3.googleusercontent.com/d/1bUU9VD31-mlGqKY1zNSZ2EudapafcC1n"
  },
  {
    title: "Volunteer Diary: My First Orphanage Visit",
    excerpt: "One of our youngest volunteers shares her emotional experience visiting Hope Orphanage.",
    date: "Jan 12, 2024",
    category: "VOLUNTEER DIARIES",
    image: "https://lh3.googleusercontent.com/d/1UkmuquMIlae-2ULBpoJX1pqZYCAOw015"
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="STORIES FROM THE FIELD"
          title="Our Blog"
          subtitle="Updates, success stories, and reflections from our team and volunteers."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-neutral-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-600 line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
                <button className="text-primary font-bold text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
