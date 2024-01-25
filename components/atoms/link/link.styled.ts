import styled from "styled-components";

export const StyledLink = styled.a`
    text-decoration: none;
`

export const StyledNavLink = styled.a`
    text-decoration: none;
    color: var(--text-dark);
    font-size: 12px;
    font-weight: 700;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in;
    &:hover {
        color: white;
        background-color: var(--primary-color);
    }

`