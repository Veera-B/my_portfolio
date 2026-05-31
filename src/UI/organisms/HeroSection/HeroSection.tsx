import FlowingWaves from "../../Animation/WavePath/WavePath";
import Section from "../../Layout/Section/Section";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="relative rounded-1xl overflow-hidden ">
      <FlowingWaves />
      <Section
        id="about"
        title="Who Am I?"
        subtitle="Senior Software Engineer"

        // className="relative rounded-1xl overflow-hidden shadow-3xl"
      >
        {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" /> */}
        <div className="relative z-10  mt-0.5 flex flex-col gap-4 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-sm md:text-sm  leading-snug tracking-wide"
          >
            <ul className="list-disc pl-5">
              <li className="mb-2.5 leading-relaxed sm:items-center sm:justify-items-center">
                {" "}
                <span className="gap-6 font-bold  border-b mb-5 border-fuchsia-500">
                  🚀 Frontend Development (4 Years):
                </span>{" "}
                Extensive experience building responsive applications with React
                and Redux, recently adopting Tailwind CSS for modern UI. Backed
                by a solid familiarity with TypeScript and heavily focused on
                seamless API integrations, code-splitting, and performance
                optimization, with recent hands-on deployment of Module
                Federation (Micro-Frontends).
              </li>
              <li className="mb-2.5 leading-relaxed ">
                {" "}
                <span className="gap-6 font-bold  border-b mb-5 border-fuchsia-500">
                  ⚙️ Backend & Architecture (1 Year):
                </span>{" "}
                Crafting clean, versioned REST APIs using Python (FastAPI &
                Flask) with secure JWT authentication and microservices design.
              </li>
              <li className="mb-2.5 leading-relaxed">
                {" "}
                <span className="gap-6 font-bold  border-b mb-5 border-fuchsia-500">
                  📦 Modern DevOps & Tooling:{" "}
                </span>
                Streamlining development workflows using Docker
                containerization, Nx Monorepos, and the ultra-fast UV package
                manager.
              </li>
              <li className="mb-2.5 leading-relaxed">
                {" "}
                <span className="gap-6 font-bold  border-b mb-5 border-fuchsia-500">
                  🤖 Future-Forward:{" "}
                </span>
                Actively integrating Generative AI capabilities, recently
                architecting innovative Text-to-Voice microservices.
              </li>
            </ul>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-base sm:text-lg md:text-xl font-medium  leading-relaxed tracking-wider"
          >
            Beyond coding, I thrive as a collaborative team player, contributing
            and building high-quality features while driving engineering best
            practices, mentoring peers, and turning complex product requirements
            into reality.
          </motion.p>
        </div>
      </Section>
    </div>
  );
}
