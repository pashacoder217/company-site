import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-af-gold text-af-black hover:bg-af-gold-light",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-af-gold bg-transparent text-af-gold hover:bg-af-gold/10",
        secondary: "bg-af-black text-af-gold hover:bg-gray-900 border border-af-gold/50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-af-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "shadow-md hover:shadow-lg transition-all duration-300 font-semibold",
          {
            "bg-gold-gradient text-af-black hover:bg-gold-gradient-dark": variant === "default",
            "bg-af-black text-af-gold border border-af-gold/50 hover:bg-gray-900": variant === "secondary",
          },
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

