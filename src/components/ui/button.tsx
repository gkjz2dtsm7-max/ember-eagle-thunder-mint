import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold tracking-[0.08em] uppercase transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
  {
    variants: {
      variant: {
        primary: "bg-forest text-cream hover:bg-pine",
        inverse: "bg-cream-soft text-forest hover:bg-sand",
        outline: "border-2 border-forest text-forest bg-transparent hover:bg-foam",
        ghost: "text-forest hover:bg-foam",
        photo: "bg-forest text-cream hover:bg-forest-deep rounded-full",
        photoOutline: "border-2 border-cream text-navy bg-paper hover:bg-cream rounded-full",
        dark: "bg-navy text-cream hover:bg-navy-mid",
        sponsor: "border border-navy/20 text-navy bg-paper hover:bg-foam rounded-full",
      },
      size: {
        sm: "h-10 px-4 text-xs rounded-sm",
        md: "h-11 px-5 text-xs rounded-sm",
        lg: "h-12 px-6 text-sm rounded-md",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
