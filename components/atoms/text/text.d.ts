export interface IProps {
    text: string,
    className?: string,
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
    color?: string
    as?: string
}

export interface IStyledProps {
    size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
    color: string
}

interface SizeProps {
    fontSize: string,
}

export interface ISize {
    [key: string]: SizeProps
}