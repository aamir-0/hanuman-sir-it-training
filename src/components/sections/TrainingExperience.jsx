const organizations = ["DXC Technology", "Capgemini", "HCLTech", "KPMG", "BT Group", "Tech Mahindra", "Persistent Systems", "LTIMindtree", "Wipro", "Giesecke+Devrient (G+D)"];

export function TrainingExperience() {
  // Text is used until each organization's logo usage rights are confirmed by the client.
  return <section className="border-b border-slate-200 bg-white py-6" aria-label="Training experience"><div className="mx-auto flex max-w-site flex-wrap items-center gap-x-5 gap-y-2 px-6 sm:px-10 lg:px-12"><span className="eyebrow shrink-0 text-slate-500">Training experience</span><p className="text-sm leading-7 text-slate-500">{organizations.map((organization, index) => <span key={organization}>{organization}{index < organizations.length - 1 && <span className="mx-2 text-brand" aria-hidden="true">·</span>}</span>)}</p></div></section>;
}
