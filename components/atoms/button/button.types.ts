import React from 'react'

export interface IProps {
    children: React.ReactNode,
    className?: string
    as?: string
    size?: 'small' | 'medium' | 'large',
    type?: 'primary' | 'primary-outlined' | 'accent' | 'accent-outlined',
}

export interface IStyledProps {
    size: 'small' | 'medium' | 'large',
    type: 'primary' | 'primary-outlined' | 'accent' | 'accent-outlined',
}

interface SizeProps {
    fontSize: string,
    padding: string
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
