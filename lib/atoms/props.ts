//constant
interface ITextSize {
    [key: string]: string
}

export const TextSize: ITextSize = {
    'extra-small': '0.6em',
    'small': '0.8em',
    'medium': '1em',
    'large': '1.25em',
    'extra-large': '1.5em'
}

type TButtonSize = {
    fontSize: string,
    padding: string,
    iconMargin: string,
    circleSize: string,
}

interface IButtonSize {
    [key: string]: TButtonSize
}

export const ButtonSize: IButtonSize = {
    small: {
        fontSize: '0.8em',
        padding: '0.25rem 0.8rem',
        iconMargin: '0.25rem',
        circleSize: '3.25rem'
    },
    medium: {
        fontSize: '1em',
        padding: '0.6rem 1.25rem',
        iconMargin: '0.5rem',
        circleSize: '4rem'
    },
    large: {
        fontSize: '1.25em',
        padding: '1rem 2rem',
        iconMargin: '0.75rem',
        circleSize: '4.75rem'
    },
}



//enumerator property options
//
//atomic text property options
export type TextOptions = 'p' | 'span'
export type HeadingOptions = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextSizeOptions = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

//atomic button property options
export type ButtonSizeOptions = 'small' | 'medium' | 'large'


//styled components properties

//atomic text property
export interface IStyledTextProps { $size: TextSizeOptions }

//atomic backdrop property
export interface IStyledSidebarBackdropProps { $show: boolean }

//atomic sidebar property
export interface IStyledSidebarToggleProps { $show: boolean }