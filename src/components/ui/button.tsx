import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f47e6] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer active:scale-[0.97] select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#4f47e6] text-white hover:bg-[#4338ca] shadow-[0_4px_14px_rgba(79,71,230,0.32),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_20px_rgba(79,71,230,0.45)] border border-[#4338ca] hover:-translate-y-0.5",
        brand:
          "bg-[#4f47e6] text-white hover:bg-[#4338ca] shadow-[0_4px_14px_rgba(79,71,230,0.32),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_20px_rgba(79,71,230,0.45)] border border-[#4338ca] hover:-translate-y-0.5",
        liquidGlass:
          "bg-white text-slate-900 hover:text-[#4f47e6] hover:bg-slate-50 border border-slate-300 shadow-[0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.12)] hover:border-slate-400 hover:-translate-y-0.5",
        outline:
          "bg-white text-slate-900 hover:text-[#4f47e6] hover:bg-slate-50 border border-slate-300 shadow-[0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.12)] hover:border-slate-400 hover:-translate-y-0.5",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-[0_4px_12px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_18px_rgba(220,38,38,0.4)] border border-red-700 hover:-translate-y-0.5",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 shadow-xs hover:-translate-y-0.5",
        ghost:
          "text-slate-700 hover:text-slate-950 hover:bg-slate-100/90 rounded-xl",
        link:
          "text-[#4f47e6] underline-offset-4 hover:underline font-semibold",
        pill:
          "bg-white text-slate-900 hover:text-[#4f47e6] hover:bg-slate-50 rounded-full border border-slate-300 shadow-[0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.12)] hover:border-slate-400 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm",
        sm: "h-9 rounded-xl px-4 text-xs font-bold",
        lg: "h-12 rounded-xl px-7 text-sm font-bold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
