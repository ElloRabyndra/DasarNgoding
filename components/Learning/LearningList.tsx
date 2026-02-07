import { motion } from "framer-motion";
import { learningItems } from "@/data";

interface LearningListProps {
  isInView: boolean;
}

const LearningList = ({ isInView }: LearningListProps) => {
  return (
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
            <div
              className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}
            >
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
  );
};

export default LearningList;
