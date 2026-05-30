import { motion } from 'motion/react'
import type { NavListProps } from './navlist.types'
import NavItem from '../../atoms/NavItem/NavItem'

export default function NavList({ listItems, className = '', active }: NavListProps) {

  return (
    <motion.nav
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className='h-full flex items-center justify-center w-full'
    >
      <motion.ul 

        className={` 
            relative
            flex
            w-full
            /** Mobile view*/
            flex-row
            items-center
            justify-around
            gap-2
            p-2
             /** Desktop view*/
            md:flex-col
            md:items-start
            md:justify-center
            md:gap-8
            md:p-4
            overflow-hidden
            

            ${className}`}>

                     { listItems.map((item, idx) =>{
                        const isActvie = item.id.toLowerCase() === active?.toLowerCase()
                        console.log('isActvie:--',true ,'item.id.toLowerCase():',item.id.toLowerCase(),'active?.toLowerCase():',active?.toLowerCase())
                            return  <motion.li key={item.id ?? idx}
                            animate={{
                                scale: isActvie ? 1.1 : 0.8,
                                opacity: isActvie ? 1 : 0.6,
                                // to mobile
                                x: isActvie ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 8) : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className={`w-full p-2 transition-all ${isActvie?'border-r-2 border-fuchsia-600  rounded-r-sm shadow-fuchsia-100':""}`}
                        >
                            <NavItem href={item.href??"#"} icon={icon} active={isActvie} label={item.label} />
                        </motion.li>
                     })
                     }
       
      </motion.ul>
    </motion.nav>
  )
}