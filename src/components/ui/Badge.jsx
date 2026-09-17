import { cn } from "../../lib/utils";

export function Badge({ children, className }) {
  return <span className={cn("eyebrow text-brand", className)}>{children}</span>;
}
