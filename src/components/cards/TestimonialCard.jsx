import { Reveal } from "../ui/Reveal";

export function TestimonialCard({ testimonial, index = 0 }) {
  return <Reveal delay={index * 0.08} className="border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm tracking-[.2em] text-brand">★★★★★</div><blockquote className="mt-5 font-serif text-sm leading-6 text-navy">&ldquo;{testimonial.quote}&rdquo;</blockquote><div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4"><span className="grid h-8 w-8 place-items-center bg-blue-50 text-xs font-bold text-brand">{testimonial.initials}</span><span><strong className="block text-xs text-navy">{testimonial.name}</strong><small className="block text-[.65rem] text-slate-500">{testimonial.title}, {testimonial.company}</small></span></div></Reveal>;
}
