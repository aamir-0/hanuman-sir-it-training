import { motion } from "framer-motion";

export function ScrollReveal({ children, className, delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .35, delay, ease: "easeOut" }}>{children}</motion.div>;
}
