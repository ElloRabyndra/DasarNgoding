"use client";
import { motion } from "framer-motion";
import { Laptop, Target } from "lucide-react";
import CodeBlock from "./CodeBlock";
import FloatingIcon from "./FloatingIcon";

interface HeroIllustrationProps {
  delay?: number;
}

const HeroIllustration = ({ delay = 0.4 }: HeroIllustrationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="hidden lg:flex items-center justify-center"
    >
      <div className="relative">
        <CodeBlock />
        <FloatingIcon icon={Laptop} position="top-right" size="lg" />
        <FloatingIcon
          icon={Target}
          position="bottom-left"
          size="md"
          animationDelay={0.5}
        />
      </div>
    </motion.div>
  );
};

export default HeroIllustration;