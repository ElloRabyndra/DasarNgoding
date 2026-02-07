"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 xl:px-12  relative overflow-hidden" id="cta">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-cta" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-100 h-100 gradient-glow opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-75 h-75 gradient-glow opacity-30" />

      <div className="container relative z-10 mx-auto xl:px-24" ref={ref}>
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
            <span className="text-sm font-medium text-brand-cream">Mulai perjalanan coding-mu</span>
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
      </div>
    </section>
  );
};

export default CTASection;