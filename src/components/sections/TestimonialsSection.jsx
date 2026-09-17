import testimonials from "../../data/testimonials.json";
import { TestimonialCard } from "../cards/TestimonialCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function TestimonialsSection({ fullPage = false }) {
  return <section className={fullPage ? "py-16 sm:py-20" : "bg-paper py-20"}><div className="mx-auto max-w-site px-6 sm:px-10 lg:px-12"><Reveal><SectionHeading centered eyebrow="Independent learner feedback" title="Verified reviews & executive feedback" description="Feedback from senior infrastructure leads and engineering managers whose divisions completed intensive lab pathways." /></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3">{testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />)}</div></div></section>;
}
