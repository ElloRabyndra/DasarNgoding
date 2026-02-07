import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAContentProps {
  isInView: boolean;
}

const CTAContent = ({ isInView }: CTAContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-cream/10 border border-brand-cream/20 backdrop-blur-sm"
      >
        <Sparkles className="w-5 h-5 text-brand-cream" />
        <span className="text-sm font-medium text-brand-cream">
          Mulai perjalanan coding-mu
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
      >
        Mulai dari dasar.
        <br />
        <span className="text-brand-cream/80">Bangun fondasi yang kuat.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          href="https://tiktok.com/@dasarngoding"
          target="_blank"
          className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 shadow-button font-semibold flex items-center rounded-xl px-10 py-4 text-lg transition-all hover:scale-105"
        >
          Follow DasarNgoding
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-muted-foreground text-lg"
      >
        Belajar pelan-pelan, tapi konsisten.
      </motion.p>
    </motion.div>
  );
};

export default CTAContent;
