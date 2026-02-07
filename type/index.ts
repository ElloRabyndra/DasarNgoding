import {LucideIcon} from "lucide-react";

export interface LearningItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface SocialLink {
  icon: LucideIcon;
  name: string;
  handle: string;
  description: string;
  color: string;
  href: string;
}