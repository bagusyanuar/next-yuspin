type SizeOptions = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export interface IProps {
    text: string,
    className?: string,
    size?: SizeOptions,
    color?: string
    as?: string
}

export interface IStyledProps {
    size: SizeOptions,
    color: string
}

interface SizeProps {
    fontSize: string,
}

export interface ISize {
    [key: string]: SizeProps
}

