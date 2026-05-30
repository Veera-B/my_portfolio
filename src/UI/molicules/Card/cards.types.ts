import type {ReactNode} from 'react'


export interface CardProps{
    children?: ReactNode,
    className?: string,
    title?: string,
    description?: string,
    sub_title?: string
}