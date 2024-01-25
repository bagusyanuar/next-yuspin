import styled from "styled-components";
import { IStyledProps, ISize, ITheme } from './button.types'

const sizeProps: ISize = {
    small: {
        fontSize: '0.8em',
        padding: '0.25rem 0.8rem'
    },
    medium: {
        fontSize: '1em',
        padding: '0.6rem 1.25rem'
    },
    large: {
        fontSize: '1.25em',
        padding: '1rem 2rem'
    },
}

const themeProps: ITheme = {
    'primary': {
        background: 'var(--primary-color)',
        color: 'white',
        borderColor: 'var(--primary-color)',
        hover: {
            background: 'var(--primary-color)',
            color: 'white',
            borderColor: 'var(--primary-color)',
        }
    },
    'primary-outlined': {
        background: 'transparent',
        color: 'var(--primary-color)',
        borderColor: 'var(--primary-color)',
        hover: {
            background: 'var(--primary-color)',
            color: 'white',
            borderColor: 'transparent',
        }
    },
    'accent': {
        background: 'var(--accent-color)',
        color: 'white',
        borderColor: 'var(--accent-color)',
        hover: {
            background: 'var(--accent-color)',
            color: 'white',
            borderColor: 'var(--accent-color)',
        }
    },
    'accent-outlined': {
        background: 'transparent',
        color: 'var(--accent-color)',
        borderColor: 'var(--accent-color)',
        hover: {
            background: 'var(--accent-color)',
            color: 'white',
            borderColor: 'transparent',
        }
    },
}

export const StyledButton = styled.div<IStyledProps>`
    background-color: ${({ type }) => themeProps[type].background};
    color: ${({ type }) => themeProps[type].color};
    border: 1px solid ${({ type }) => themeProps[type].borderColor};
    border-radius: 0.25rem;
    cursor: pointer;
    padding: ${({ size }) => sizeProps[size].padding};
    font-size: ${({ size }) => sizeProps[size].fontSize};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ type }) => themeProps[type].hover.background};
        color: ${({ type }) => themeProps[type].hover.color};
        border: 1px solid ${({ type }) => themeProps[type].hover.borderColor};
    }
`