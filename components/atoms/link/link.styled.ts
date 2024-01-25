import styled from "styled-components";
import { IStyledProps } from './link.types'

export const StyledLink = styled.a<IStyledProps>`
    text-decoration: none;
    color: ${({ color }) => color};
    transition: color 0.2s ease-in;

    &:hover {
        color: color-mix(in srgb, ${({ color }) => color} 90%, black);
    }
`