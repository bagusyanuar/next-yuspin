import styled from "styled-components";
import { IStyledTextProps, TextSize } from './props'

// atomic text style
export const StyledText = styled.p<IStyledTextProps>`
    font-size: ${({ $size }) => TextSize[$size]};
    margin-bottom: 0;
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