import useActiveSection from "../../../hooks/useActiveSection";
import { useState } from "react";
import NavList from "../../molicules/NavList/NavList";

const sections = ["about", "skills", "projects", "architectures", "contacts"];
export interface ListItemType {
  label: string;
  href: string;
  id: string;
}
const listItems: ListItemType[] = [
  {
    label: "ABOUT",
    href: "#about",
    id: "about",
  },
  {
    label: "SKILLS",
    href: "#skills",
    id: "skills",
  },
  {
    label: "PROJECTS",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Architectures",
    href: "#architectures",
    id: "architectures",
  },
  {
    label: "CONTACT",
    href: "#contact",
    id: "contacts",
  },
];
export default function Navbar() {
  const isActiveSectionId = useActiveSection({ sections });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isOpen ? "h-auto bg-white/95 backdrop-blur-md pb-4" : "h-16 bg-white/80 backdrop-blur-md"}
        flex flex-col justify-start px-4 border-b border-fuchsia-100 shadow-sm
       md:min-h-screen
         md:w-60 md:flex-col md:items-stretch md:p-10 md:pt-20 md:border-r md:border-b-0 md:border-fuchsia-500 md:shadow-1xl
      `}
    >
      <div className="flex items-center justify-between w-full h-16 md:hidden">
        <span className="font-sans font-black text-fuchsia-600 tracking-wider">
          PORTFOLIO
        </span>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-600 hover:text-fuchsia-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <NavList
        active={isActiveSectionId}
        listItems={listItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </aside>
  );
}
