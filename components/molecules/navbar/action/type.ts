export interface IProps {
    items: Array<TItem>
    className?: string
}

export type TItem = {
    to: string
    icon: string
    showBadge?: boolean
    badgeValue?: number
}