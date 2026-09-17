import { Reveal } from "../ui/Reveal";

export function LogoRibbon({ companies }) {
  return <section className="border-b border-slate-200 bg-white py-5" aria-label="Trusted organisations"><div className="mx-auto flex max-w-site flex-wrap items-center gap-x-9 gap-y-4 px-6 sm:px-10 lg:px-12"><span className="eyebrow shrink-0 text-slate-500">Trusted by engineering leadership at</span><Reveal className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-5 text-slate-400">{companies.map((company) => <img className="h-7 w-auto max-w-[100px] opacity-60 grayscale" src={company.logoPath} alt={company.alt} loading="lazy" key={company.name} />)}</Reveal></div></section>;
}
