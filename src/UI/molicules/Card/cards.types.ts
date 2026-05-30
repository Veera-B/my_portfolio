import type {ReactNode} from 'react'

type obj={
     [key: string]: string[]
}

export interface CardProps{
    children?: ReactNode,
    className?: string,
    title?: string,
    list_items?: obj[],
    description?: string,
    sub_title?: string
}