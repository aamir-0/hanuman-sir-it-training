import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = ({ children, className }) => <DropdownMenuPrimitive.Trigger className={cn("inline-flex items-center gap-1 py-2 text-xs font-semibold text-slate-600 transition hover:text-brand", className)}>{children}<ChevronDown size={13} /></DropdownMenuPrimitive.Trigger>;
export function DropdownMenuContent({ children }) { return <DropdownMenuPrimitive.Portal><DropdownMenuPrimitive.Content align="end" sideOffset={8} className="z-50 min-w-52 border border-line bg-white p-2 shadow-xl">{children}</DropdownMenuPrimitive.Content></DropdownMenuPrimitive.Portal>; }
export const DropdownMenuItem = ({ children, asChild = false }) => <DropdownMenuPrimitive.Item asChild={asChild} className="block cursor-pointer px-3 py-2 text-sm text-slate-600 outline-none transition hover:bg-blue-50 hover:text-brand">{children}</DropdownMenuPrimitive.Item>;
