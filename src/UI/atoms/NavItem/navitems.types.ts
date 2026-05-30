import type {ReactNode} from 'react'

export interface NavItemProps{
    className?: string,
    label: string,
    href: string,
    icon?:ReactNode
    active?:boolean
}

