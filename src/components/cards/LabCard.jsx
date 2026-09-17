import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function LabCard({ lab, index = 0 }) {
  return <Reveal delay={index * 0.08} className="overflow-hidden border border-slate-200 bg-white shadow-sm"><img className="aspect-[16/9] w-full object-cover" src={lab.imagePath} alt={lab.title} loading="lazy" /><div className="p-6"><div className="flex items-center justify-between"><span className="eyebrow text-brand">{lab.level}</span><span className="text-xs text-slate-400">{lab.environmentDetails.duration}</span></div><h2 className="mt-4 font-serif text-2xl text-navy">{lab.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{lab.tagline}</p><Link className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand" to={`/labs/${lab.id}`}>Inspect lab <ArrowRight size={14} /></Link></div></Reveal>;
}
