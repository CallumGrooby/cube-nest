import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../ultilies/MergeCSS";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "inline-flex h-full items-center justify-center rounded-sm text-xl font-mavenPro text-primary transition-colors disabled:pointer-events-none data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        default:
          "bg-secondary hover:bg-red-400 rounded-full text-background uppercase text-sm lg:text-lg",
        underline:
          "hover:text-secondary transition-all duration-300 hover-underline-animation min-h-[42px] h-full",
        round:
          "rounded-full bg-primary hover:bg-gray-900  flex justify-center items-center",
        white:
          "bg-background hover:bg-white text-primary rounded-full uppercase",
      },
      size: {
        default: "h-10 py-2 px-4",
        smRounded: "h-5 w-5",
        lgRounded: " sm:w-20 sm:h-20 w-10 h-10",
        auto: "h-auto px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, isSelected, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
