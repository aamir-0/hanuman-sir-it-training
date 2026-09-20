import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function CourseCard({ course, index = 0 }) {
  return <Reveal delay={index * 0.08} className="flex flex-col border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><span className="eyebrow text-brand">{course.category}</span><span className="text-xs text-slate-400">{course.level}</span></div><h3 className="mt-4 font-serif text-2xl text-navy">{course.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{course.tagline}</p><div className="mt-4 flex flex-wrap gap-2">{course.modules.slice(0, 3).map((module) => <span className="text-[.65rem] text-slate-500" key={module}>{module}</span>)}</div><Link className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand" to={`/courses/${course.id}`}>View pathway <ArrowRight size={14} /></Link></Reveal>;
}
