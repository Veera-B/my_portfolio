import type { ListItemType } from "../../organisms/Navbar/Navbar"

export interface NavListProps{
    className?: string
    active?: string
    listItems: ListItemType[]
}