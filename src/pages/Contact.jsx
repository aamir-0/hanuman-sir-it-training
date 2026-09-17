import { ContactForm } from "../components/sections/ContactForm";
import { PageHero } from "./PageHero";

export function Contact() { return <><PageHero eyebrow="Enterprise admissions" title="Bring the real architecture problem." description="Tell us about your team, your environment, and where the current mental model breaks down." /><section className="bg-mist px-6 py-16 sm:px-10 lg:px-12"><div className="mx-auto max-w-4xl"><ContactForm /></div></section></>; }
