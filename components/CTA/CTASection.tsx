"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Gradient from "./Gradient";
import CTAContent from "./CTAContent";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 xl:px-12  relative overflow-hidden" id="cta">
      {/* Gradient Background and Effects */}
      <Gradient />

      <div className="container relative z-10 mx-auto xl:px-24" ref={ref}>
        {/* CTA Content */}
        <CTAContent isInView={isInView} />
      </div>
    </section>
  );
};

export default CTASection;
