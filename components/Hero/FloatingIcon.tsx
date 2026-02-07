"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  position: "top-right" | "bottom-left";
  size?: "sm" | "md" | "lg";
  animationDelay?: number;
}

const FloatingIcon = ({
  icon: Icon,
  position,
  size = "md",
  animationDelay = 0,
}: FloatingIconProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const positionClasses = {
    "top-right": "-top-4 -right-4",
    "bottom-left": "-bottom-4 -left-4",
  };

  const animationConfig =
    position === "top-right"
      ? {
          y: [0, -8, 0],
          duration: 2.5,
        }
      : {
          y: [0, 8, 0],
          duration: 3,
        };

  return (
    <motion.div
      animate={{ y: animationConfig.y }}
      transition={{
        duration: animationConfig.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay,
      }}
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} gradient-cta rounded-xl shadow-card flex items-center justify-center`}
    >
      <Icon className={iconSizes[size]} />
    </motion.div>
  );
};

export default FloatingIcon;