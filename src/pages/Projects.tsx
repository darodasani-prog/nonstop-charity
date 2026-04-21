import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

export default function Projects() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="OUR WORK"
          title="Documenting Our Impact"
          subtitle="Every project is a step towards a Nigeria where every child has a comfortable upbringing."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Community Food Drives"
            description="Distributing essential food, clean water, and supplies to children and families in need across our communities."
            image="https://lh3.googleusercontent.com/d/1fb4UWJaaQBhVz6_VBzTF_NCbigIJ1RQb"
            location="Various Communities"
            tag="COMPLETED"
            path="/projects"
          />
          <ProjectCard
            title="Orphanage Outreach"
            description="Regular visits to homes like the Adonai Children Home, bringing joy, supplies, and mentorship to orphaned children."
            image="https://lh3.googleusercontent.com/d/1sb5BI7P1CtXEu0lvE7nEbo7a7cbvj5VY"
            location="Ogun State, Nigeria"
            tag="COMPLETED"
            path="/projects"
          />
          <ProjectCard
            title="Rescue A Girl Initiative"
            description="Empowering young women through our 'Pad a Girl' program, providing reusable sanitary pads and health education."
            image="https://lh3.googleusercontent.com/d/10dk3ARtms6ch27lWvvCoeKHBkQ9wR1CC"
            location="Local Schools & Centers"
            tag="COMPLETED"
            path="/projects"
          />
        </div>
      </section>
    </div>
  );
}
