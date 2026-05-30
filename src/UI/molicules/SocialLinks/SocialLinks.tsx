import NavItem from "../../atoms/NavItem/NavItem";
import { FaGithub,FaLinkedin } from "react-icons/fa";
export default function SocialLinks(){
    return(<div className="flex items-center gap-4">
        <NavItem 
        href="https://github.com"
        icon={<FaGithub size={22}/>}
        label="Github"
        className=""/>
        <NavItem 
        href="https://linkedin.com"
        icon={<FaLinkedin size={22}/>}
        label="Github"
        className=""/>

    </div>)  
}