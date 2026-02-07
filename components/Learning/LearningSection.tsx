"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LearningBackgorund from "./LearningBackgorund";
import LearningHeader from "./LearningHeader";
import LearningList from "./LearningList";


const LearningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 xl:px-12  gradient-hero relative overflow-hidden" id="belajar">
      {/* Background glow */}
      <LearningBackgorund />

      <div className="container relative z-10 mx-auto xl:px-24" ref={ref}>
        <LearningHeader isInView={isInView} />
        <LearningList isInView={isInView} />
      </div>
    </section>
  );
};

export default LearningSection;