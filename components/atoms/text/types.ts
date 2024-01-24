export interface IStyledProps {
    fontSize: string,
}

export interface ISize {
    [key: string]: string
}


export interface IProps {
    text: string,
    className?: string,
    size?: 'small' | 'medium' | 'large' | 'extraLarge',
    color?: string
    as?: string
}