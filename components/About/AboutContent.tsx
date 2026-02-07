"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface AboutContentProps {
  isInView: boolean;
}

const AboutContent = ({ isInView }: AboutContentProps) => {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-border">
        <BookOpen className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground font-medium">
          Tentang Kami
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        Tentang DasarNgoding
      </h2>

      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          DasarNgoding adalah platform edukasi untuk pemula yang ingin memahami
          dasar pemrograman dengan benar. Santai tapi serius.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Kami fokus pada fundamental seperti cara berpikir programmer, Git, dan
          konsep inti sebelum masuk ke framework atau tech stack.
        </motion.p>
      </div>
    </>
  );
};

export default AboutContent;
