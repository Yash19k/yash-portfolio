import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const BASE_CLASSES =
  "group bg-background text-slate-200 border-white/10 hover:border-accent/50 relative w-auto cursor-pointer overflow-hidden rounded-full border p-2.5 px-6 text-center font-semibold text-sm transition-colors duration-300";

/** Label plus the slide-in copy shown on hover. The copy is aria-hidden so the label is announced once. */
const HoverContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    <div className="flex items-center justify-center gap-2">
      <div className="bg-accent h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children}
      </span>
    </div>
    <div
      aria-hidden="true"
      className="text-white absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100"
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4" />
    </div>
  </>
);

export interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ children, className, ...props }, ref) => (
    <button ref={ref} className={cn(BASE_CLASSES, className)} {...props}>
      <HoverContent>{children}</HoverContent>
    </button>
  )
);
InteractiveHoverButton.displayName = "InteractiveHoverButton";

export interface InteractiveHoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

/** Same look as InteractiveHoverButton, rendered as a single link (no button nested inside an <a>). */
export const InteractiveHoverLink = React.forwardRef<HTMLAnchorElement, InteractiveHoverLinkProps>(
  ({ children, className, ...props }, ref) => (
    <a ref={ref} className={cn(BASE_CLASSES, "inline-block", className)} {...props}>
      <HoverContent>{children}</HoverContent>
    </a>
  )
);
InteractiveHoverLink.displayName = "InteractiveHoverLink";

export default InteractiveHoverButton;
