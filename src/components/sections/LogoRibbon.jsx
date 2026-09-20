import { LogoLoop } from "../reactbits/LogoLoop";

export function LogoRibbon({ companies }) {
  return <section className="border-b border-slate-200 bg-white py-5" aria-label="Trusted organisations"><div className="mx-auto flex max-w-site flex-wrap items-center gap-x-9 gap-y-4 px-6 sm:px-10 lg:px-12"><span className="eyebrow shrink-0 text-slate-500">Trusted by engineering leadership at</span><div className="min-w-0 flex-1"><LogoLoop logos={companies} speed={42} pauseOnHover /></div></div></section>;
}
