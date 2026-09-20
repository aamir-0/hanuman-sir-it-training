import { CountUp } from "../reactbits/CountUp";
import { ScrollReveal } from "../reactbits/ScrollReveal";

export function StatsBanner({ stats }) {
  return <section className="bg-navy text-white"><div className="mx-auto grid max-w-site sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat, index) => <ScrollReveal key={stat.label} delay={index * .08} className="border-white/10 p-6 text-center sm:p-8 lg:border-r last:border-0"><p className="font-serif text-3xl text-blue-300"><CountUp value={stat.value} duration={1800} once easing="easeOut" /></p><p className="mt-2 text-[.62rem] font-bold uppercase tracking-wider text-white">{stat.label}</p><p className="mt-1 text-[.65rem] text-slate-400">{stat.description}</p></ScrollReveal>)}</div></section>;
}
