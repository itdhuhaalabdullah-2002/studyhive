import { motion } from "motion/react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "light";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-control text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70";

const variants = {
  primary: "bg-brand text-white hover:bg-[#6d75ee]",
  outline: "border border-white/30 text-white hover:bg-white/10",
  light: "bg-white text-night hover:bg-white/90",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const motionProps = disabled
    ? {}
    : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
