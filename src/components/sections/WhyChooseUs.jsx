import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const points = [
  ["12+ Years of Experience", "Technical training shaped by long-term industry practice."],
  ["Industry-Oriented Learning", "Curricula connected to the tools, roles, and decisions teams use at work."],
  ["Hands-on Practical Approach", "Practice, troubleshooting, and assessment are part of every pathway."],
  ["Customized Course Design", "Adapt the depth, sequence, and examples to your learning goals."],
  ["Wide Technology Coverage", "Cloud, virtualization, servers, Linux, networking, programming, databases, and AI."],
  ["Flexible Delivery Models", "Corporate, college, cohort, virtual, on-site, and lab-as-a-service options."]
];

export function WhyChooseUs() {
  return <section className="bg-paper py-20"><div className="mx-auto max-w-site px-6 sm:px-10 lg:px-12"><Reveal><SectionHeading eyebrow="Why choose us" title="Training designed to move capability forward." /></Reveal><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{points.map(([title, description], index) => <Reveal key={title} delay={index * .06} className="border border-slate-200 bg-white p-6 shadow-sm"><span className="font-serif text-2xl text-brand">0{index + 1}</span><h3 className="mt-5 font-serif text-xl text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></Reveal>)}</div></div></section>;
}
