"use client";
import { motion } from "framer-motion";
import { BookOpen, Target } from "lucide-react";
interface AboutContentProps {
  isInView: boolean;
}
const AboutStats = ({ isInView }: AboutContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="grid grid-cols-2 gap-6 pt-8 max-w-md mx-auto"
    >
      <div className="gradient-card rounded-xl p-6 border border-border shadow-card text-center">
        <Target className="w-8 h-8 mx-auto mb-3 text-green-400" />
        <div className="text-2xl font-bold text-foreground">Fokus</div>
        <div className="text-sm text-muted-foreground">Fundamental First</div>
      </div>
      <div className="gradient-card rounded-xl p-6 border border-border shadow-card text-center">
        <BookOpen className="w-8 h-8 mx-auto mb-3 text-blue-400" />
        <div className="text-2xl font-bold text-foreground">Praktis</div>
        <div className="text-sm text-muted-foreground">Langsung Praktek</div>
      </div>
    </motion.div>
  );
};

export default AboutStats;
