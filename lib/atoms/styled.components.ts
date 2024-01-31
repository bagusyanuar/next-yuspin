import styled from "styled-components";
import {
    IStyledTextProps,
    TextSize,
    IStyledSidebarBackdropProps,
    IStyledSidebarToggleProps
} from './props'

// atomic text style
export const StyledText = styled.p<IStyledTextProps>`
    font-size: ${({ $size }) => TextSize[$size]};
`

//atomic link style
export const StyledLink = styled.a<{ $color?: string }>`
    text-decoration: none;
    color: ${({ $color }) => $color ? $color : 'var(--primary-color)'};
    transition: color 0.2s ease-in;

    &:hover {
        color: color-mix(in srgb, ${({ $color }) => $color ? $color : 'var(--primary-color)'} 90%, black);
    }
`

export const StyledNavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: var(--text-dark);
    background-color: white;
    font-weight: 700;
    font-size: 0.75rem;
    transition: all 0.2s ease-in;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;

    &:hover {
        color: white;
        background-color: var(--primary-color);
    }
`
export const StyledNavMenuLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: var(--text-dark);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(220, 220, 220, 0.3)
    }
`

export const StyledSidebarBackdrop = styled.div<IStyledSidebarBackdropProps>`
    display: ${({ $show }) => $show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`

export const StyledSidebarToggleWrapper = styled.div<IStyledSidebarToggleProps>`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 1rem 0.5rem;
    transform: ${({ $show }) => $show ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;
`

export const SlickItemWrapper = styled.div<{ $height: number }>`
    width: 100%;
    aspect-ratio: 3 / 1;
    height: ${({ $height }) => $height}px;
`

export const SlictNextArrow = styled.div`
    position: absolute;
    display: flex !important;
    align-items: center;
    justify-content: center;
    top: 50%;
    right: 15px;
    z-index: 2;
    width: 30px;
    height: 30px;
    transform: translate(0, -50%);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.8;
    font-size: 1em;
    &::before {
        content: '';
    }

    &:hover {
        background-color: var(--primary-color);
        color: white;
        opacity: 1;
    }
`

export const SlickPrevArrow = styled.div`
    position: absolute;
    display: flex !important;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 15px;
    z-index: 2;
    width: 30px;
    height: 30px;
    transform: translate(0, -50%);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.8;
    font-size: 1em;
    &::before {
        content: '';
    }

    &:hover {
        background-color: var(--primary-color);
        color: white;
        opacity: 1;
    }
`