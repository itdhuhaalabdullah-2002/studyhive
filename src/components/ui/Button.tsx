import { motion } from "motion/react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-control bg-brand text-sm font-medium text-white transition-colors hover:bg-[#6d75ee] disabled:cursor-not-allowed disabled:opacity-70";

export default function Button({
  children,
  href,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const motionProps = disabled
    ? {}
    : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={`${base} ${className}`}
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
      className={`${base} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
