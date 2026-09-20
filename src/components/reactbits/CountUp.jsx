import { useEffect, useRef, useState } from "react";

export function CountUp({ value, duration = 1800, once = true, easing = "easeOut" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);
  useEffect(() => { const node = ref.current; if (!node) return undefined; const match = String(value).match(/([0-9.]+)/); if (!match) { setDisplay(value); return undefined; } const end = Number(match[1]); const suffix = String(value).replace(match[1], ""); const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting || (once && hasRun.current)) return; hasRun.current = true; const start = performance.now(); const tick = (now) => { const progress = Math.min((now - start) / duration, 1); const eased = easing === "easeOut" ? 1 - Math.pow(1 - progress, 3) : progress; setDisplay(`${Number((end * eased).toFixed(end % 1 ? 1 : 0))}${suffix}`); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); if (once) observer.unobserve(node); }, { threshold: .6 }); observer.observe(node); return () => observer.disconnect(); }, [duration, easing, once, value]);
  return <span ref={ref}>{display}</span>;
}
