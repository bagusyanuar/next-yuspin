import React from 'react'

type SizeOptions = 'small' | 'medium' | 'large'
type AddOnOptions = 'prepend' | 'append'
type ThemeOptions = 'primary' | 'primary-outlined' | 'accent' | 'accent-outlined'

export interface IProps {
    children: React.ReactNode,
    className?: string
    size?: SizeOptions,
    theme?: ThemeOptions,
}

export interface IIconProps extends IProps {
    icon: string,
    addon: AddOnOptions
}

export interface IStyledProps {
    size: SizeOptions,
    theme: ThemeOptions,
}

export interface IIconStyledProps extends IStyledProps {
    $addon: AddOnOptions
}

interface SizeProps {
    fontSize: string,
    padding: string,
    iconMargin: string,
    circleSize: string,
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
