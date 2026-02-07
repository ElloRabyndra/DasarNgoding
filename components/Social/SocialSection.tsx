"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SocialHeader from "./SocialHeader";
import SocialList from "./SocialList";

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-24 px-6 xl:px-12 bg-secondary relative overflow-hidden"
      id="sosial"
    >
      <div className="container xl:px-24 relative z-10 mx-auto" ref={ref}>
        <SocialHeader isInView={isInView} />
        <SocialList isInView={isInView} />
      </div>
    </section>
  );
};

export default SocialSection;
