import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { CourseDetail } from "./pages/CourseDetail";
import { Labs } from "./pages/Labs";
import { LabDetail } from "./pages/LabDetail";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";

export default function App() {
  return <BrowserRouter><Routes><Route element={<SiteLayout />}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/courses" element={<Courses />} /><Route path="/courses/:id" element={<CourseDetail />} /><Route path="/labs" element={<Labs />} /><Route path="/labs/:id" element={<LabDetail />} /><Route path="/testimonials" element={<Testimonials />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes></BrowserRouter>;
}
