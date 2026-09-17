import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";

export function Navbar({ courses, labs }) {
  return <header className="relative z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-3 sm:px-10 lg:px-12" aria-label="Primary navigation">
      <Link className="flex items-center gap-3 text-navy" to="/"><span className="grid h-9 w-9 place-items-center border border-blue-700 text-sm font-bold text-blue-700">H</span><span><strong className="block font-serif text-sm">HANUMAN</strong><small className="block text-[.55rem] font-bold uppercase tracking-[.18em] text-slate-500">Enterprise IT Training</small></span></Link>
      <div className="hidden items-center gap-7 lg:flex">
        <Link className="nav-link" to="/">Home</Link>
        <DropdownMenu><DropdownMenuTrigger>Courses</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem asChild><Link className="font-semibold text-brand" to="/courses">All courses</Link></DropdownMenuItem>{courses.map((course) => <DropdownMenuItem asChild key={course.id}><Link to={`/courses/${course.id}`}>{course.title}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <DropdownMenu><DropdownMenuTrigger>Labs</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem asChild><Link className="font-semibold text-brand" to="/labs">All labs</Link></DropdownMenuItem>{labs.map((lab) => <DropdownMenuItem asChild key={lab.id}><Link to={`/labs/${lab.id}`}>{lab.title}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <Link className="nav-link" to="/about">About us</Link><Link className="nav-link" to="/testimonials">Testimonials</Link><Link className="nav-link" to="/contact">Contact</Link><Button as="link" className="min-h-8 px-4 py-2 text-[.65rem]" to="/contact">Enquire now</Button>
      </div>
      <MobileMenu courses={courses} labs={labs} />
    </nav>
  </header>;
}
