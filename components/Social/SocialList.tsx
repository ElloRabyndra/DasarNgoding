import { motion } from "framer-motion";
import { socialLinks } from "@/data";

interface SocialHeaderProps {
  isInView: boolean;
}

const SocialList = ({ isInView }: SocialHeaderProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="group"
        >
          <div className="h-full gradient-card rounded-2xl border border-border p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:border-brand-accent hover:-translate-y-2 text-center">
            <div
              className={`w-16 h-16 mx-auto rounded-2xl bg-linear-to-br ${social.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3`}
            >
              <social.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {social.name}
            </h3>
            <p className="text-muted-foreground font-medium mb-3">
              {social.handle}
            </p>
            <p className="text-sm text-muted-foreground">
              {social.description}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialList;
