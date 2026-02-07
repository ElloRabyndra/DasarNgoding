import { LearningItem, SocialLink } from "@/type";
import {
  Code2,
  Brain,
  GitBranch,
  Layers,
  Rocket,
  Instagram,
  Github,
  PlayCircle,
} from "lucide-react";

const learningItems: LearningItem[] = [
  {
    icon: Code2,
    title: "Fundamental Programming",
    description:
      "Pahami dasar-dasar yang jadi fondasi semua bahasa pemrograman.",
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

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@dasarngoding.id",
    description: "Konten harian & tips programming",
    color: "from-pink-500 to-purple-500",
    href: "https://instagram.com/dasarngoding.id",
  },
  {
    icon: PlayCircle,
    name: "TikTok",
    handle: "@dasarngoding",
    description: "Video pendek & tutorial cepat",
    color: "from-black via-cyan-400 to-pink-500",
    href: "https://tiktok.com/@dasarngoding",
  },
  {
    icon: Github,
    name: "GitHub",
    handle: "DasarNgoding",
    description: "Source code & project examples",
    color: "from-neutral-800 to-black",
    href: "https://github.com/DasarNgoding",
  },
];

export { learningItems, socialLinks };