import type { IconProps } from "./icon.types";

export default function Icon({children,className=''}:IconProps){
    return(<span className={`${className}`}>
        {children}
    </span>)
}