import { Outlet } from "react-router-dom";
import courses from "../../data/courses.json";
import labs from "../../data/labs.json";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout() {
  return <><Navbar courses={courses} labs={labs} /><main><Outlet /></main><Footer /></>;
}
