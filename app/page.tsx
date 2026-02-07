import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import LearningSection from "@/components/Learning/LearningSection";
import SocialSection from "@/components/Social/SocialSection";
import CTASection from "@/components/CTA/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LearningSection />
        <SocialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;