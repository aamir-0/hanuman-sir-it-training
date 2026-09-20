import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../reactbits/SpotlightCard";

export function LabCard({ lab, index = 0 }) {
  return <Reveal delay={index * 0.08}><SpotlightCard className="h-full overflow-hidden border border-slate-200 bg-white shadow-sm" spotlightColor="rgba(74, 85, 104, .16)"><img className="aspect-[16/9] w-full object-cover" src={lab.imagePath} alt={lab.title} loading="lazy" /><div className="p-6"><div className="flex items-center justify-between"><span className="eyebrow text-brand">{lab.category}</span><span className="text-xs text-slate-400">{lab.level}</span></div><h2 className="mt-4 font-serif text-2xl text-navy">{lab.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{lab.tagline}</p><div className="mt-4 flex flex-wrap gap-2">{lab.idealFor.slice(0, 2).map((tag) => <span className="border border-slate-200 px-2 py-1 text-[.6rem] text-slate-500" key={tag}>{tag}</span>)}</div><Link className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand" to={`/labs/${lab.id}`}>Inspect lab <ArrowRight size={14} /></Link></div></SpotlightCard></Reveal>;
}
