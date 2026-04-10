import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverted";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
};

const baseStyles =
  "inline-flex items-center justify-center font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-lg";

const variants = {
  primary: "bg-black text-white hover:bg-zinc-800",
  secondary: "border-2 border-black bg-white text-black hover:bg-zinc-50",
  ghost: "border border-white/25 text-white hover:bg-white/10",
  inverted: "bg-white text-black hover:bg-zinc-100"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base"
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button"
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
