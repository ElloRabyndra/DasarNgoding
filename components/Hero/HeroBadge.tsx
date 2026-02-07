"use client";
import { motion } from "framer-motion";

interface HeroBadgeProps {
  text: string;
  delay?: number;
}

const HeroBadge = ({ text, delay = 0.2 }: HeroBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 border border-border backdrop-blur-sm"
    >
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </motion.div>
  );
};

export default HeroBadge;