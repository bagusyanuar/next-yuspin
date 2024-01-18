import styled from 'styled-components'
import { device } from '@/components/media'

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
    
    @media ${device.laptop} {
      padding: 0.75rem 5rem;
    }
`

export const NavLinkWrapper = styled.div`
    display: none;
    gap: 0.25rem;

    @media ${device.laptop} {
    display: flex;
    }
`

export const NavLink = styled.a`
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
    &:hover {
      text-decoration: none;
      background-color: var(--primary-color);
      color: white;
    }
`