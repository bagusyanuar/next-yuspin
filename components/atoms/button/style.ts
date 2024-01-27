import styled from "styled-components";
import { IStyledProps, IIconStyledProps, ISize, ITheme } from './type'

const sizeProps: ISize = {
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

const addOnMargin = ({ $addon, size }: IIconStyledProps): string => {
    return $addon === 'append' ? `margin-left: ${sizeProps[size].iconMargin};` : `margin-right: ${sizeProps[size].iconMargin};`;
}

export const StyledButton = styled.button<IStyledProps>`
    background-color: ${({ theme }) => themeProps[theme].background};
    color: ${({ theme }) => themeProps[theme].color};
    width: fit-content;
    height: fit-content;
    border: 1px solid ${({ theme }) => themeProps[theme].borderColor};
    border-radius: 0.25rem;
    cursor: pointer;
    padding: ${({ size }) => sizeProps[size].padding};
    font-size: ${({ size }) => sizeProps[size].fontSize};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => themeProps[theme].hover.background};
        color: ${({ theme }) => themeProps[theme].hover.color};
        border: 1px solid ${({ theme }) => themeProps[theme].hover.borderColor};
    }
`

export const StyledButtonIcon = styled.div<IIconStyledProps>`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => themeProps[theme].background};
    color: ${({ theme }) => themeProps[theme].color};
    width: fit-content;
    height: fit-content;
    border: 1px solid ${({ theme }) => themeProps[theme].borderColor};
    border-radius: 0.25rem;
    cursor: pointer;
    padding: ${({ size }) => sizeProps[size].padding};
    font-size: ${({ size }) => sizeProps[size].fontSize};
    transition: all 0.2s ease-in-out;

    .bx {
        color: ${({ theme }) => themeProps[theme].color};
        transition: all 0.2s ease-in-out;
        ${addOnMargin}
    }
    
    &:hover {
        background-color: ${({ theme }) => themeProps[theme].hover.background};
        color: ${({ theme }) => themeProps[theme].hover.color};
        border: 1px solid ${({ theme }) => themeProps[theme].hover.borderColor};

        .bx {
            color: ${({ theme }) => themeProps[theme].hover.color};
        }
    }
`

export const StyledCircleButton = styled.button<IStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => themeProps[theme].background};
    color: ${({ theme }) => themeProps[theme].color};
    width: ${({ size }) => sizeProps[size].circleSize};
    height: ${({ size }) => sizeProps[size].circleSize};
    border: 1px solid ${({ theme }) => themeProps[theme].borderColor};
    border-radius: 50%;
    cursor: pointer;
    font-size: ${({ size }) => sizeProps[size].fontSize};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => themeProps[theme].hover.background};
        color: ${({ theme }) => themeProps[theme].hover.color};
        border: 1px solid ${({ theme }) => themeProps[theme].hover.borderColor};
    }
`