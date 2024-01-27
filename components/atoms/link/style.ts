import styled from "styled-components";
import { IStyledProps } from './type'

export const StyledLink = styled.a<IStyledProps>`
    text-decoration: none;
    color: ${({ color }) => color};
    transition: color 0.2s ease-in;

    &:hover {
        color: color-mix(in srgb, ${({ color }) => color} 90%, black);
    }
`

export const StyledNavMenuLink = styled.a`
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

export const StyledNavActionLink = styled.a`
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