import stats from "../data/stats.json";
import credentials from "../data/credentials.json";
import courses from "../data/courses.json";
import companies from "../data/companies.json";
import { Hero } from "../components/sections/Hero";
import { CredentialsGrid } from "../components/sections/CredentialsGrid";
import { StatsBanner } from "../components/sections/StatsBanner";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { TrainingExperience } from "../components/sections/TrainingExperience";
import { LogoRibbon } from "../components/sections/LogoRibbon";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { TrainingMethodology } from "../components/sections/TrainingMethodology";
import { CourseCard } from "../components/cards/CourseCard";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { ContactForm } from "../components/sections/ContactForm";

export function Home() {
  return <><Hero stats={stats} /><LogoRibbon companies={companies} /><TrainingExperience /><section className="bg-paper py-20 sm:py-24"><div className="mx-auto grid max-w-site gap-12 px-6 sm:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-12"><Reveal><SectionHeading eyebrow="Practical IT training" title="Practical IT Training Backed by Industry Experience" /><div className="mt-8 overflow-hidden border border-slate-200 bg-white shadow-sm"><img className="aspect-[4/3] w-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85" alt="Professional IT training instructor" /><div className="p-5"><h3 className="font-serif text-xl text-navy">Training that connects learning to work</h3><p className="mt-4 text-sm leading-6 text-slate-600">We help corporates, colleges, and aspiring IT professionals build practical skills through structured instruction, guided labs, troubleshooting, and application.</p><ul className="mt-4 grid gap-2 text-sm text-slate-600"><li>Industry-focused technical curriculum</li><li>Hands-on practice with relevant platforms</li><li>Flexible delivery for teams and learners</li><li>Skills that remain useful beyond certification</li></ul></div></div></Reveal><Reveal delay={.1}><p className="eyebrow text-slate-500">Technical credibility</p><h3 className="mt-2 font-serif text-2xl text-navy">What We Bring to Your Learning Journey</h3><div className="mt-6"><CredentialsGrid credentials={credentials} /></div></Reveal></div></section><StatsBanner stats={stats} /><section id="courses" className="bg-mist py-16 sm:py-20"><div className="mx-auto max-w-site px-6 sm:px-10 lg:px-12"><Reveal><SectionHeading eyebrow="Technology pathways" title="One training partner across the modern IT landscape." description="Explore structured pathways across cloud, virtualization, servers, Linux, networking, programming, databases, and emerging technologies." /></Reveal><div className="mt-8 grid gap-5 md:grid-cols-3">{courses.slice(0, 6).map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}</div></div></section><WhyChooseUs /><TrainingMethodology /><TestimonialsSection /><section id="contact" className="bg-mist py-16"><div className="mx-auto grid max-w-site overflow-hidden border border-slate-200 bg-white shadow-lg lg:grid-cols-[.8fr_1.2fr]"><div className="bg-navy p-7 text-white sm:p-10"><p className="eyebrow text-blue-200">Training enquiry</p><h2 className="display mt-3 text-3xl">Let&apos;s build the right learning pathway.</h2><p className="mt-4 text-sm leading-6 text-slate-300">Tell us whether you are planning for a corporate team, a college cohort, or your own next technical step.</p></div><ContactForm compact /></div></section></>;
}
