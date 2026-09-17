import { motion } from "framer-motion";

export function Reveal({ children, className, delay = 0, ...props }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.35, delay, ease: "easeOut" }} {...props}>{children}</motion.div>;
}
