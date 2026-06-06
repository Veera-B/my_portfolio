import { motion } from "framer-motion";
import type { CardProps } from "./cards.types";
import Heading from "../../atoms/Heading/Heading";
import SubHeading from "../../atoms/SubHeading/SubHeading";
import SmokyProgressBar from "../../atoms/SmokyLine/SmokyLine";

export default function Card({
  children,
  className = "",
  description = "",
  title = "",
  sub_title = "",
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
        rotateX: 4,
        rotateY: -4,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
                relative
                rounded-2xl        
                px-12 py-16 
                gap-6
                /* hover on rich glow */
                hover:border
                hover:shadow-[0_10px_20px_rgba(24,111,138,0.13)]
                border-none
                /* to create inner glowshadow */
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]
                text-xs

                ${className}
            `}
    >
      {/* to add soft light glow in bg */}
      <div
        className="absolute inset-0
                bg-linear-to-br
              from-cyan-500/5 to-transparent 
              rounded-2xl opacity-0 hover:opacity-100 
              transition-opacity duration-500 pointer-events-none"
      />

      <div className="relative z-10">
        {title !== "" && (
          <>
            <Heading title={title} />
            <SmokyProgressBar />
          </>
        )}
        {sub_title !== "" && <SubHeading title={sub_title} />}
        {children}
        {description !== "" && <p>{description}</p>}
      </div>
    </motion.div>
  );
}
