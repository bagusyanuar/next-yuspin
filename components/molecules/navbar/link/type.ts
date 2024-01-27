export interface IProps {
    items: Array<TItem>
    className?: string
}

type TItem = {
    to: string
    text: string
}