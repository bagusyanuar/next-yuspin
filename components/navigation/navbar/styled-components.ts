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

export const NavActionWrapper = styled.div`
    display: flex;
    align-items: center;

    @media ${device.laptop} {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
`

export const NavAction = styled.a<{ $hideonsmall: boolean }>`
    cursor: pointer;
    text-decoration: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: ${props => props.$hideonsmall ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
      display: flex;
      align-items: center;
    }

    &:hover {
      background-color: rgba(220, 220, 220, 0.3)
    }
`

NavAction.defaultProps = {
  $hideonsmall: true
}

export const NavMenu = styled.a`
    cursor: pointer;
    text-decoration: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
    background-color: rgba(220, 220, 220, 0.3)
    }

    @media ${device.laptop} {
      display: none;
    }
`

export const NavSidebarBackdrop = styled.div<{ $active: boolean }>`
    display: ${(props) => props.$active ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`

export const NavSidebar = styled.div<{ $active: boolean }>`
    position: absolute;
    top: 0;
    transform: ${(props) => props.$active ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 1rem 0.5rem;
`