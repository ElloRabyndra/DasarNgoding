import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

interface SocialHeaderProps {
  isInView: boolean;
}

const SocialHeader = ({ isInView }: SocialHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-border">
        <Instagram className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground font-medium">
          Social Media
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        Belajar Bareng DasarNgoding
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Konten tersedia dalam bentuk video singkat dan praktik langsung. Follow
        untuk update terbaru!
      </p>
    </motion.div>
  );
};

export default SocialHeader;
