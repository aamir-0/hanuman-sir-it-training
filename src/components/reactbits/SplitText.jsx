import { motion } from "framer-motion";

export function SplitText({ children, className }) {
  return <span className={className} aria-label={children}>{String(children).split(" ").map((word, index) => <motion.span className="split-text-word" key={`${word}-${index}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: index * .045, ease: "easeOut" }}>{word}{index < String(children).split(" ").length - 1 ? " " : ""}</motion.span>)}</span>;
}
