"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SubtlePattern from "./SubtlePattern";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-24 px-6 xl:px-12 bg-secondary relative overflow-hidden"
      id="tentang"
    >
      {/* Subtle pattern */}
      <SubtlePattern />

      <div className="container relative z-10 mx-auto xl:px-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <AboutContent isInView={isInView} />

          {/* Stats or highlights */}
          <AboutStats isInView={isInView} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
