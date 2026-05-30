import {motion} from 'motion/react'
export default function FlowingWaves() {
  // 🌟 వేవ్స్ పూర్తి ఎత్తు (0 నుండి 100 వరకూ) కవర్ అయ్యేలా Paths ని మార్చాము
  const wavePaths = [
    "M -10 90 Q 30 10, 60 70 T 120 30 T 210 10",
    "M -10 93 Q 32 13, 62 73 T 122 33 T 210 13",
    "M -10 96 Q 34 16, 64 76 T 124 36 T 210 16",
    "M -10 99 Q 36 19, 66 79 T 126 39 T 210 19",
    "M -10 100 Q 38 20, 68 81 T 128 42 T 215 21",
    "M -10 100 Q 45 22, 72 81 T 128 42 T 215 21",
    "M -10 200 Q 33 25, 74 81 T 128 42 T 215 21",
    "M -10 150 Q 56 29, 78 81 T 128 42 T 215 21",
    "M -10 170 Q 23 34, 90 81 T 128 42 T 215 21",
    "M -10 100 Q 44 23, 94 81 T 128 42 T 215 21",
    "M -10 190 Q 56 55, 23 81 T 128 42 T 215 21",
    "M -10 230 Q 11 33, 55 81 T 128 42 T 215 21",
    "M -10 345 Q 88 66, 77 81 T 128 42 T 215 21",
    "M -10 560 Q 66 45, 89 81 T 128 42 T 215 21",
    "M -10 170 Q 44 32, 55 81 T 128 42 T 215 21",
    
  ];

  return (
    
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg
        className="w-full h-full opacity-40"
        viewBox="0 0 100 100"
       
        preserveAspectRatio="none" 
        fill="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="56%">
            <stop offset="0%" stopColor="#10b581" />   {/* Emerald Green */}
            <stop offset="40%" stopColor="#FF61F8" />  {/* Cyan / Teal */}
            <stop offset="75%" stopColor="#831C91" />  {/* Yellow */}
            <stop offset="100%" stopColor="#DE1A58" /> {/* Orange */}
          </linearGradient>
        </defs>

        {wavePaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="url(#waveGradient)"
          
            strokeWidth="0.2" 
            opacity={1 - index * 0.15}
            animate={{
              d: [
                path,
                path.replace("70", "85").replace("30", "15"),
              
                path,
                
              ],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`sub-${i}`}
            d={`M -10 ${40 + i * 5} Q 40 ${20 - i * 2}, 70 ${50 + i * 2} T 210 ${10 + i * 5}`}
            stroke="url(#waveGradient)"
            strokeWidth="0.08"
            opacity={0.2}
            animate={{
              strokeWidth: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}