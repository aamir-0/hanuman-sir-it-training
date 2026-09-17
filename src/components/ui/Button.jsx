import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export function Button({ as = "button", variant = "primary", className, children, ...props }) {
  const classes = cn("inline-flex min-h-[42px] items-center justify-center gap-3 px-4 py-3 text-xs font-bold transition duration-200 hover:-translate-y-0.5", variant === "primary" && "bg-brand text-white hover:bg-[#075d9f]", variant === "dark" && "border border-white/20 bg-white/10 text-white hover:bg-white/20", variant === "outline" && "border border-slate-200 bg-white text-navy hover:border-brand hover:text-brand", className);
  if (as === "link") return <Link className={classes} {...props}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
