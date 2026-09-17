import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../ui/Reveal";

function CountUp({ value }) {
  const controls = useAnimation();
  const [display, setDisplay] = useState(value);
  const hasStarted = useRef(false);
  const match = value.match(/([0-9.]+)/);
  useEffect(() => { if (!match || hasStarted.current) return; hasStarted.current = true; const end = Number(match[1]); const suffix = value.replace(match[1], ""); let frame; const started = performance.now(); const tick = (now) => { const progress = Math.min((now - started) / 900, 1); setDisplay(`${Number((end * (1 - Math.pow(1 - progress, 3))).toFixed(end % 1 ? 1 : 0))}${suffix}`); if (progress < 1) frame = requestAnimationFrame(tick); }; controls.start({ opacity: 1 }); frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [controls, match, value]);
  return <motion.span animate={controls}>{display}</motion.span>;
}

export function StatsBanner({ stats }) {
  return <section className="bg-navy text-white"><div className="mx-auto grid max-w-site sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat, index) => <Reveal key={stat.label} delay={index * .08} className="border-white/10 p-6 text-center sm:p-8 lg:border-r last:border-0"><p className="font-serif text-3xl text-blue-300"><CountUp value={stat.value} /></p><p className="mt-2 text-[.62rem] font-bold uppercase tracking-wider text-white">{stat.label}</p><p className="mt-1 text-[.65rem] text-slate-400">{stat.description}</p></Reveal>)}</div></section>;
}
