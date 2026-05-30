import useActiveSection from "../../../hooks/useActiveSection";
// import Button from "../../atoms/Buttons/Button";
import NavList from "../../molicules/NavList/NavList";
// import SectionHeader from "../../molicules/SectionHeader/SectionHeader";
const sections = [
  "about",
  "skills",
  "projects",
  "architectures",
  "contacts",
];
export interface ListItemType{
    label: string,
    href: string,
    id:string
};
 const listItems:ListItemType[]= [
    {
      label: "ABOUT",
      href: "#about",
      id: "about"
    },
    {
      label: "SKILLS",
      href: "#skills",
      id: "skills"
    },
    {
      label: "PROJECTS",
      href: "#projects",
      id: "projects"
    },
    {
      label: "Architectures",
      href: "#architectures",
      id: "architectures"
    },
    {
      label: "CONTACT",
      href: "#contact",
      id: "contacts"
    }
  ]
export default function Navbar(){
    const isActiveSectionId =  useActiveSection({sections});
   
    return(<aside
            className="
               fixed top-0 left-0 w-full  z-50 h-16 flex items-center px-4
               md:h-screen md:w-60 md:flex-col md:items-stretch md:p-10 md:pt-20
               shadow-1xl
               border-r
               border-fuchsia-500
            "
        >
        
            <NavList active={isActiveSectionId} listItems={listItems}  />
        

    </aside>)
}