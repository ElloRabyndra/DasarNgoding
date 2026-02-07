"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBadge from "./HeroBadge";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <HeroBadge text="Platform Edukasi Programming" delay={0.2} />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight"
        >
          Dasar<span className="text-accent">Ngoding</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground"
        >
          Fokus fundamental, bukan shortcut.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-muted-foreground/80 max-w-md"
        >
          Belajar programming dari nol dengan pendekatan sederhana dan praktis.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <Link href="#belajar">
          <Button
            size="lg"
            className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 shadow-button font-semibold rounded-xl px-8 py-6 text-base transition-all hover:scale-105"
          >
            Mulai Belajar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href="https://instagram.com/dasarngoding.id" target="_blank">
          <Button
            size="lg"
            variant="outline"
            className="border-border bg-transparent hover:bg-brand-light text-foreground rounded-xl px-8 py-6 text-base transition-all hover:scale-105"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow @dasarngoding.id
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;