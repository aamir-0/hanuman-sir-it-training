import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const steps = ["Understand", "Demonstrate", "Practice", "Troubleshoot", "Assess", "Apply"];

export function TrainingMethodology() {
  return <section className="bg-mist py-20"><div className="mx-auto max-w-site px-6 sm:px-10 lg:px-12"><Reveal><SectionHeading eyebrow="Training methodology" title="A practical loop from context to capability." description="Every programme follows a clear sequence that turns concepts into confident technical action." /></Reveal><div className="mt-10 grid gap-0 border border-slate-200 bg-white md:grid-cols-6">{steps.map((step, index) => <Reveal key={step} delay={index * .06} className="border-b border-slate-200 p-5 last:border-0 md:border-b-0 md:border-r md:last:border-0"><span className="font-serif text-2xl text-brand">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 font-serif text-lg text-navy">{step}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{index === 0 ? "Map the goal and context." : index === 1 ? "Make the concept visible." : index === 2 ? "Work through the scenario." : index === 3 ? "Diagnose what changes." : index === 4 ? "Measure the outcome." : "Carry the skill into work."}</p></Reveal>)}</div></div></section>;
}
