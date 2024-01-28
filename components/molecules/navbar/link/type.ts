export interface IProps {
    items: Array<TItem>
    className?: string
}

export type TItem = {
    to: string
    text: string
}