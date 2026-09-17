import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";

export function CredentialsGrid({ credentials }) {
  return <div className="grid gap-4 sm:grid-cols-2">{credentials.map((credential, index) => <Reveal delay={index * .08} key={credential.name} className="border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between gap-4"><span className="grid h-8 w-8 place-items-center border border-blue-100 text-xs text-brand">◆</span><Badge className="text-slate-400">{credential.badgeLabel}</Badge></div><h3 className="mt-5 font-serif text-lg text-navy">{credential.name}</h3><p className="mt-1 text-[.65rem] font-bold uppercase tracking-wider text-brand">{credential.issuer}</p><p className="mt-3 text-xs leading-5 text-slate-600">{credential.description}</p></Reveal>)}</div>;
}
