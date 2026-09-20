import { useSearchParams } from "react-router-dom";
import courses from "../data/courses.json";
import { CourseCard } from "../components/cards/CourseCard";
import { PageHero } from "./PageHero";

export function Courses() { const [params] = useSearchParams(); const category = params.get("category"); const filtered = category ? courses.filter((course) => course.category === category) : courses; return <><PageHero eyebrow="Curriculum catalogue" title="Training pathways built for infrastructure teams." description={category ? courses.find((course) => course.category === category)?.sectionDescription : "Focused courses across cloud, virtualization, servers, Linux, networking, programming, databases, AI, and customized training."} /><section className="py-16 sm:py-20"><div className="mx-auto grid max-w-site gap-5 px-6 sm:px-10 md:grid-cols-3 lg:px-12">{filtered.map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}</div></section></>; }
