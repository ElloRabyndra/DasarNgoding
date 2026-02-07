"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, GitBranch, Layers, Rocket } from "lucide-react";

const learningItems = [
  {
    icon: Code2,
    title: "Fundamental Programming",
    description: "Pahami dasar-dasar yang jadi fondasi semua bahasa pemrograman.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Brain,
    title: "Cara Berpikir Programmer",
    description: "Problem solving & computational thinking yang benar.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: GitBranch,
    title: "Git & Workflow Dasar",
    description: "Version control yang wajib dikuasai developer modern.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Layers,
    title: "Konsep Inti Sebelum Framework",
    description: "Kuasai vanilla dulu sebelum lompat ke framework.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    icon: Rocket,
    title: "Praktik Langsung",
    description: "Learning by doing dengan project-project nyata.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
];

const LearningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 xl:px-12  gradient-hero relative overflow-hidden" id="belajar">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 gradient-glow opacity-30" />

      <div className="container relative z-10 mx-auto xl:px-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-border">
            <Layers className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Kurikulum</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Apa yang Akan Kamu Pelajari
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Materi yang disusun untuk membangun pondasi programming yang kuat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl border border-border p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:border-brand-accent hover:-translate-y-1">
                <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;