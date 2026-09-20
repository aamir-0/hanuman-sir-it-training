import labs from "../data/labs.json";
import { LabCard } from "../components/cards/LabCard";
import { PageHero } from "./PageHero";

export function Labs() { return <><PageHero eyebrow="IT labs & lab-as-a-service" title="Practice the failure modes before production finds them." description="Windows, Linux, networking, VMware, and customized lab environments for repeatable technical practice." /><section className="py-16 sm:py-20"><div className="mx-auto grid max-w-site gap-5 px-6 sm:px-10 md:grid-cols-3 lg:px-12">{labs.map((lab, index) => <LabCard key={lab.id} lab={lab} index={index} />)}</div></section></>; }
