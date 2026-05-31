import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverLiftProps {
  children: ReactNode;
}

export default function HoverLift({ children }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
