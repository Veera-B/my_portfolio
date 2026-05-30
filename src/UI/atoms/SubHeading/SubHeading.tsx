import type { SubHeadingProps } from "./subheading.types";

export default function SubHeading({className='',title}:SubHeadingProps){
    return <h3 className={`text-sm font-bold tracking-tight flex flex-col ${className}`}>
        {title}
    </h3>
}