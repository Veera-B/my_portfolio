import Section from "../../Layout/Section/Section";
// import Card from "../../molicules/Card/Card";
import {motion} from 'motion/react'
import type {Variants} from 'motion/react'
import {useState} from 'react'

export default function Contacts() {
  // to change hover status
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"]
  ];

  // typing container configuration
  const typingContainer:Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        repeat: Infinity,
        repeatDelay: 2 // after two minuts typing animation will starts again
      }
    }
  };

  // animation for each letter
  const typingLetter:Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline-block",
      transition: { duration: 0.03, ease: "easeIn" }
    }
  };

  const emailText = Array.from("veerabashipangu@gmail.com");
  const phoneText = Array.from("+91 9885969252");

  return (
    <Section title="Get In Touch" id="contacts" className="relative w-full min-h-150  flex-col justify-between items-center overflow-hidden pt-12 pb-6">
      
      {/* top glow effect */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b  to-transparent z-10" />

      {/* Glowing icons */}
      <div className="relative flex gap-12 z-20 justify-center items-center w-full mt-4">
        {/* @ ICON */}
        <motion.div 
          className="w-16 h-16 rounded-full border border-cyan-500/40 bg-cyan-950/20 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
          </svg>
        </motion.div>

        {/* MAIL ICON */}
        <motion.div 
          className="w-20 h-20 rounded-full border border-blue-500/50 bg-blue-950/30 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </motion.div>

        {/* PHONE ICON */}
        <motion.div 
          className="w-16 h-16 rounded-full border border-cyan-500/40 bg-cyan-950/20 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          animate={{ y: [4, -8, 4] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </motion.div>
      </div>

      {/* Content center (Hover In -> Stop, Hover Out -> Restart) */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center gap-6">
        
        {/* EMAIL BOX */}
        <motion.div 
          className="cursor-pointer items-center justify-center p-4 bg-slate-900/40 border
           border-slate-100 rounded-xl backdrop-blur-md w-125 
           shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-cyan-500/50
            hover:bg-gray-50 transition-all duration-300 hover:text-gray-600"
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setIsEmailHovered(true)}
          onMouseLeave={() => setIsEmailHovered(false)}
        >
          <p className="text-xs text-slate-500 font-medium mb-1">Email Address</p>
          
          {/* hover key animation */}
          <motion.div 
            key={isEmailHovered ? "hovered-email" : "typing-email"}
            className="text-base font-mono font-bold text-white hover:text-gray-600 tracking-wide"
            variants={typingContainer}
            initial="hidden"
            animate={isEmailHovered ? "hidden" : "visible"}
          >
            {isEmailHovered ? (
              <span>{emailText.join("")}</span>
            ) : (
             
              emailText.map((char, index) => (
                <motion.span key={index} variants={typingLetter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))
            )}
           
            {!isEmailHovered && (
              <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-1 animate-pulse" />
            )}
          </motion.div>
        </motion.div>

        {/* PHONE BOX */}
        <motion.div 
          className="cursor-pointer w-125 p-4 bg-slate-900/40 border border-slate-100 
          rounded-xl backdrop-blur-md  shadow-[0_0_15px_rgba(59,130,246,0.05)]
           hover:border-blue-500/50
            hover:bg-gray-50 transition-all duration-300
           hover:text-gray-600
           "
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setIsPhoneHovered(true)}
          onMouseLeave={() => setIsPhoneHovered(false)}
        >
          <p className="text-xs text-slate-500 font-medium mb-1">Phone Number</p>
          
          <motion.div 
            key={isPhoneHovered ? "hovered-phone" : "typing-phone"}
            className="text-base font-mono font-bold text-white hover:text-gray-600 tracking-wide"
            variants={typingContainer}
            initial="hidden"
            animate={isPhoneHovered ? "hidden" : "visible"}
          >
            {isPhoneHovered ? (
              <span>{phoneText.join("")}</span>
            ) : (
              phoneText.map((char, index) => (
                <motion.span key={index} variants={typingLetter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))
            )}
            
            {!isPhoneHovered && (
              <span className="inline-block w-[2px] h-4 bg-blue-400 ml-1 animate-pulse" />
            )}
          </motion.div>
        </motion.div>

      </div>

      {/* blue leaser line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.4)] z-10 my-2" />

      {/* Virtual keyboard area*/}
      <div className="w-full max-w-4xl px-4 flex flex-col gap-1.5 items-center opacity-30 select-none pointer-events-none transform perspective-1000 rotateX-25">
        {keyboardRows.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-1.5">
            {row.map((key, kIdx) => (
              <motion.div
                key={kIdx}
                className="w-8 h-8 md:w-11 md:h-11 bg-slate-950 border border-slate-900 rounded flex items-center justify-center text-[10px] font-semibold text-slate-700"
                animate={{
                  backgroundColor: ["#020617", "#0f172a", "#0891b2", "#020617"],
                  borderColor: ["#0f172a", "#1e293b", "#22d3ee", "#0f172a"],
                  color: ["#475569", "#94a3b8", "#ffffff", "#475569"],
                  boxShadow: ["none", "none", "0 0 10px rgba(34,211,238,0.5)", "none"]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: Math.random() * 3.5,
                  ease: "easeInOut"
                }}
              >
                {key}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

    </Section>
  );
}
