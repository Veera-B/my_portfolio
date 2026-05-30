import type { ReactNode } from "react";

export interface TextProps{
    children: ReactNode,
    className?: string // if add ?after key means optional property
}