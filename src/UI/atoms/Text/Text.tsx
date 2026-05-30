import type { TextProps } from "./text.types";

export default function Text({children,className=""}:TextProps){
    return(<p className={`text-slate-300 leading-7 ${className}`}>
        {children}
    </p>)
}