import React from 'react'

type SizeOptions = 'small' | 'medium' | 'large'
type TypeOptions = 'primary' | 'primary-outlined' | 'accent' | 'accent-outlined'

export interface IProps {
    children: React.ReactNode,
    className?: string
    as?: string
    size?: SizeOptions,
    type?: TypeOptions,
}

export interface IIconProps extends IProps {
    icon: string
}

export interface IStyledProps {
    size: SizeOptions,
    type: TypeOptions,
}

interface SizeProps {
    fontSize: string,
    padding: string,
    iconMargin: string
}

export interface ISize {
    [key: string]: SizeProps
}

interface ThemeProps {
    background: string,
    color: string,
    borderColor: string,
    hover: {
        background: string,
        color: string,
        borderColor: string
    }
}

export interface ITheme {
    [key: string]: ThemeProps
}
