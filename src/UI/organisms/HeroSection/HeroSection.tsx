
import FlowingWaves from "../../Animation/WavePath/WavePath"
import Section from "../../Layout/Section/Section"
import {motion} from "motion/react"
export default function Hero(){


    return(
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
      <div className="relative z-10  mt-0.5 flex flex-col gap-4">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm sm:text-sm md:text-sm  leading-snug tracking-wide"
        >
          I am a Full Stack Developer with 4+ years of professional experience in building scalable frontend and backend applications.

Frontend expertise (4 years): React, TypeScript, Redux, Context API, Module Federation, performance optimization.

Backend expertise (1 year): Python (FastAPI, Flask microservices), REST APIs, JWT authentication, API versioning.

Specialized in Micro‑Frontend architectures, Microservices design, and containerized deployments using Docker, Nx monorepo, and UV package manager.

Recently explored Generative AI projects such as text‑to‑voice services.

Collaborative team player, occasionally acting as feature‑level architect, mentoring colleagues, and driving best practices.

        </motion.p>
 {/* <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-xl sm:text-2xl md:text-base font-semibold leading-snug tracking-wide"
        >
Senior Software Engineer | NTT DATA Pvt Ltd, Bengaluru | Oct 2022 – May 2025

Owned Spektra‑AQT module from scratch.

Integrated APIs, Grafana dashboards, LogicMonitor, ADX, CMDB.

Acted as feature‑level architect, mentoring junior engineers.

Software Engineer | CAMSDATA Technologies India Pvt Ltd, Bengaluru | May 2021 – Sep 2022

Developed Verizon Wireless 5G Home NSA portal.

Improved code quality, mentored junior developers, and enhanced team productivity.
        </motion.p> */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-base sm:text-lg md:text-xl font-medium  leading-relaxed tracking-wider"
        >
          My passion lies in building modern, scalable web applications that deliver seamless user experiences and robust backend performance.

I am deeply passionate about architecting and developing cutting‑edge web applications, blending frontend innovation with backend reliability.

Driven by a passion for modern web development, I specialize in creating scalable, secure, and high‑performance applications.
        </motion.p>
      </div>
  

        </Section>
    </div>
    )
}