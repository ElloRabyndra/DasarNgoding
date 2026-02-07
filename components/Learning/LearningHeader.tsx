import { motion } from "framer-motion";
import { Layers } from "lucide-react";

interface LearningHeaderProps {
  isInView: boolean;
}

const LearningHeader = ({ isInView }: LearningHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-border">
        <Layers className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground font-medium">
          Kurikulum
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        Apa yang Akan Kamu Pelajari
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Materi yang disusun untuk membangun pondasi programming yang kuat.
      </p>
    </motion.div>
  );
};

export default LearningHeader;
