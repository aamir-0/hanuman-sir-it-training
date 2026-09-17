import { Badge } from "./Badge";

export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return <div className={centered ? "mx-auto max-w-2xl text-center" : ""}><Badge>{eyebrow}</Badge><h2 className="display mt-3 text-3xl text-navy sm:text-4xl">{title}</h2>{description && <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>}</div>;
}
