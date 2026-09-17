import courses from "../data/courses.json";
import { CourseCard } from "../components/cards/CourseCard";
import { PageHero } from "./PageHero";

export function Courses() { return <><PageHero eyebrow="Curriculum catalogue" title="Training pathways built for infrastructure teams." description="Focused courses that connect certification outcomes to the architecture decisions your production environment demands." /><section className="py-16 sm:py-20"><div className="mx-auto grid max-w-site gap-5 px-6 sm:px-10 md:grid-cols-3 lg:px-12">{courses.map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}</div></section></>; }
