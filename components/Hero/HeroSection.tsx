"use client";
import HeroBackground from "./Herobackground";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

const HeroSection = () => {
  return (
    <section className="min-h-screen px-6 xl:px-12 gradient-hero relative overflow-hidden">
      <HeroBackground />

      <div className="container relative z-10 py-40 lg:py-32 mx-auto xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;