import { motion } from "framer-motion";
import type { SectionProps } from "./section.types";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      // Provides the fade effect
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }} // animates user on view
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`
        relative 
        w-full 
     
        flex 
        flex-col 
        justify-center 
        py-4
        px-4 
        sm:px-6 
        md:px-12 
        lg:px-16
        overflow-hidden
        border-b-0.5
        border-b-fuchsia-200
        shadow-fuchsia-400/50
        ${className}
      `}
    >
      {/* creates bg blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* section header part */}
      <div className="relative z-10 mb-3 flex flex-col items-start">
        {/* section title part */}
        <motion.h5
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            font-serif 
            font-black 
            text-1xl 
            sm:text-sm 
            md:text-sm 
            tracking-wider 
            uppercase
            bg-linear-to-r from-blue-700 via-gray-50-200 to-slate-300
            bg-clip-text 
            text-transparent
          "
        >
          {title}
        </motion.h5>

        {/* Glowing Line under the title */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-0.75 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-700 rounded-full mt-3 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
        />

        {/* show when sub title available */}
        {subtitle !== "" && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-1 text-slate-400 text-sm sm:text-base font-1xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* main content of the section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 w-full flex-1 flex flex-col justify-start mt-7"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
