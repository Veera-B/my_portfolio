import { motion } from 'motion/react'
import type { ButtonProps } from './button.types'

export default function Button({children=null,className=''}:ButtonProps){
     return (<motion.button
      className={`px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children&&children}
    </motion.button>)
}


