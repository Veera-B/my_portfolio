
import Navbar from "../organisms/Navbar/Navbar";
import type { LayoutProps } from "./layout.types";

export default function Layout({children,theme}:LayoutProps){
  
    return(<div className=
           {` w-full
            flex
            flex-col
            md:flex-row
            gap-6
            md:gap-12
            min-h-screen
            ${theme === 'dark' ? 'dark bg-slate-950 text-gray-100' : 'bg-white text-slate-500'}
           dark:border-slate-800
           transition-colors duration-300`}
           
        >
           
        <Navbar />
        <main className="w-full md:w-full h-screen overflow-y-auto scroll-smooth pt-20 md:pt-4 ml-0 md:ml-60 px-4 md:px-0">
            {children}
        </main>
    </div>)
}