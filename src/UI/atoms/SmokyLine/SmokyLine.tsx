import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SmokyProgressBar() {
  const [progress, setProgress] = useState(0);

  // డెమో కోసం ప్రోగ్రెస్ బార్ పెరగడానికి ఒక ఎఫెక్ట్
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) return 0; // 100 కి చేరగానే మళ్లీ మొదటి నుండి మొదలవుతుంది
        return oldProgress - 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
    // className="w-full max-w-xl mx-auto p-8 bg-slate-950 rounded-xl my-10"
    >
      {/* <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-400">Loading Task...</span>
        <span className="text-sm font-medium text-purple-400">{progress}%</span>
      </div> */}

      {/* మెయిన్ కంటైనర్ */}
      <div className="relative w-full h-0.5 bg-slate-50 rounded-full overflow-visible">
        
        {/* 1. వెనుక ఉండే స్మోకీ/బ్లర్ గ్లో ఎఫెక్ట్ (Smoky Glow Effect) */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-full blur-md opacity-75"
          animate={{ width: '100%' }}
            transition={{ type: "spring", stiffness: 20, damping: 15 }}
        />

        {/* 2. పైన కనిపించే అసలైన ప్రోగ్రెస్ లైన్ (Main Gradient Line) */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-full"
          animate={{ width: '100%' }}
          transition={{ type: "spring", stiffness: 20, damping: 15 }}
        >
          
          <motion.div 
          animate={{
            x: progress
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-white rounded-full blur-sm shadow-[0_0_15px_#f43f5e] animate-pulse" />
        </motion.div>

      </div>
    </div>
  );
}
