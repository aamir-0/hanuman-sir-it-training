import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";
import GooeyNav from "../reactbits/GooeyNav";

export function Navbar({ courses, labs }) {
  const { pathname } = useLocation();
  const sitePath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
  const primaryIndex = ["/", "/corporate-training", "/college-training"].indexOf(pathname);
  const secondaryIndex = ["/training-experience", "/about", "/contact", "/blogs"].indexOf(pathname);
  return <header className="relative z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-3 sm:px-10 lg:px-12" aria-label="Primary navigation">
      <Link className="flex items-center gap-3 text-navy" to="/"><span className="grid h-9 w-9 place-items-center border border-blue-700 text-sm font-bold text-blue-700">H</span><span><strong className="block font-serif text-sm">HANUMAN</strong><small className="block text-[.55rem] font-bold uppercase tracking-[.18em] text-slate-500">Enterprise IT Training</small></span></Link>
      <div className="hidden items-center gap-2 lg:flex">
        <GooeyNav items={[{ label: "Home", href: sitePath("/") }, { label: "Corporate Training", href: sitePath("/corporate-training") }, { label: "College Training", href: sitePath("/college-training") }]} particleCount={15} particleDistances={[70, 10]} particleR={90} initialActiveIndex={primaryIndex} animationTime={600} timeVariance={300} colors={[1, 2, 3, 1, 2, 3, 1, 4]} />
        <DropdownMenu><DropdownMenuTrigger>Courses</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem asChild><Link className="font-semibold text-brand" to="/courses">All courses</Link></DropdownMenuItem>{courses.map((course) => <DropdownMenuItem asChild key={course.id}><Link to={`/courses?category=${encodeURIComponent(course.category)}`}>{course.category}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <DropdownMenu><DropdownMenuTrigger>Labs</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem asChild><Link className="font-semibold text-brand" to="/labs">All labs</Link></DropdownMenuItem>{labs.map((lab) => <DropdownMenuItem asChild key={lab.id}><Link to={`/labs/${lab.id}`}>{lab.category}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <GooeyNav items={[{ label: "Training Experience", href: sitePath("/training-experience") }, { label: "About Us", href: sitePath("/about") }, { label: "Contact Us", href: sitePath("/contact") }, { label: "Blogs", href: sitePath("/blogs") }]} particleCount={15} particleDistances={[70, 10]} particleR={90} initialActiveIndex={secondaryIndex} animationTime={600} timeVariance={300} colors={[1, 2, 3, 1, 2, 3, 1, 4]} />
      </div>
      <MobileMenu courses={courses} labs={labs} />
    </nav>
  </header>;
}
