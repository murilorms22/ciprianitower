"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const { openModal } = useModal();

  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none";
  
  const variants = {
    primary: "bg-[#C4A57A] text-white hover:bg-[#B39366] shadow-[0_4px_14px_0_rgba(196,165,122,0.39)] hover:shadow-[0_6px_20px_rgba(196,165,122,0.23)]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#333333]",
    outline: "border border-[#C4A57A] text-[#C4A57A] hover:bg-[#C4A57A] hover:text-white"
  };

  const sizes = {
    default: "h-12 px-8 text-base",
    sm: "h-10 px-6 text-sm",
    lg: "h-14 px-10 text-lg uppercase tracking-wide"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
          props.onClick(e);
        } else if (props.type !== "submit") {
          openModal();
        }
      }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
