import { motion } from "motion/react";
import type { NavListProps } from "./navlist.types";
import NavItem from "../../atoms/NavItem/NavItem";

export default function NavList({
  listItems,
  className = "",
  active,
  isOpen,
  setIsOpen,
}: NavListProps) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} md:block w-full h-full`}>
      <motion.nav
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full flex items-center justify-center w-full"
      >
        <motion.ul
          className={` 
              relative
              flex
              w-full
              /** Mobile view - Stack vertically when open */
              flex-col
              items-start
              justify-start
              gap-4
              p-4
              /** Desktop view */
              md:flex-col
              md:items-start
              md:justify-center
              md:gap-8
              md:p-4
              overflow-hidden
              ${className}
          `}
        >
          {listItems.map((item, idx) => {
            const isActvie = item.id.toLowerCase() === active?.toLowerCase();

            return (
              <motion.li
                key={item.id ?? idx}
                onClick={() => setIsOpen(false)}
                animate={{
                  scale: isActvie ? 1.05 : 0.95,
                  opacity: isActvie ? 1 : 0.6,
                  x: isActvie ? 8 : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className={`w-full p-2 transition-all ${isActvie ? "border-l-2 md:border-l-0 md:border-r-2 border-fuchsia-600 rounded-r-sm shadow-fuchsia-100" : ""}`}
              >
                <NavItem
                  href={item.href ?? "#"}
                  active={isActvie}
                  label={item.label}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.nav>
    </div>
  );
}
