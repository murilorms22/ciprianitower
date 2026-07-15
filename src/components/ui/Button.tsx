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
    primary: "bg-[#D96227] text-white hover:bg-[#C2511A] shadow-[0_4px_14px_0_rgba(217,98,39,0.39)] hover:shadow-[0_6px_20px_rgba(217,98,39,0.23)]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#333333]",
    outline: "border border-[#D96227] text-[#D96227] hover:bg-[#D96227] hover:text-white"
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
