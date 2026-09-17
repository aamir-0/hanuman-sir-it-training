import { Badge } from "../components/ui/Badge";

export function PageHero({ eyebrow, title, description }) { return <section className="bg-navy px-6 py-16 text-white sm:px-10 lg:px-12"><div className="mx-auto max-w-site"><Badge className="text-blue-200">{eyebrow}</Badge><h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{title}</h1>{description && <p className="mt-5 max-w-2xl text-slate-300">{description}</p>}</div></section>; }
