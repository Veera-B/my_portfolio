import {motion} from 'motion/react'
import type { NavItemProps } from './navitems.types';


export default function NavItem({href,label,active,className,icon}:NavItemProps){
  
    return(
        <motion.a
            id={label}
            className={`
                flex
                items-center
                gap-2
                w-full
                font-sans
                font-black
                tracking-wider
                whitespace-nowrap
                
                /** mobile */
                text-xs 
                md:text-sm
                transition-colors
                ${
                    active 
                    ? "text-fuchsia-600" 
                    : "text-slate-500 hover:text-slate-900 bg-transparent"
                
                }
                ${className}
                `}
            href={href}
            whileHover={{x: typeof window !== 'undefined'&& window.innerWidth < 768 ? 0 : 5}}
        >
            {icon&&icon}
            {label}
        </motion.a>
    )
}