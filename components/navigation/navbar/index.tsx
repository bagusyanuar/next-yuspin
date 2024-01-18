import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '@/components/media'
import { NavbarWrapper, NavLinkWrapper, NavLink } from '@/components/navigation/navbar/styled-components'



const NavActionWrapper = styled.div`
    display: flex;
    align-items: center;

    @media ${device.laptop} {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
`

const NavAction = styled.a<{ $hideonsmall: boolean }>`
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

const NavMenuAction = styled.a`
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

const BackdropLayer = styled.div<{ $active: boolean }>`
    display: ${(props) => props.$active ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`

const NavSide = styled.div<{ $active: boolean }>`
    position: absolute;
    top: 0;
    transform: ${(props) => props.$active ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 1rem 0.5rem;
`

function Index() {
  const [backdropLayerShow, setBackdropLayerShow] = useState<boolean>(false);
  const [navSideShow, setNavSideShow] = useState<boolean>(false);

  const handleShowNavSide = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setBackdropLayerShow(!backdropLayerShow)
    setTimeout(() => {
      setNavSideShow(!navSideShow)
    }, 100);
  }

  const handleCloseNavSide = () => {
    setBackdropLayerShow(false)
    setNavSideShow(false)
  }


  return (
    <>
      <NavbarWrapper>
        <NavMenuAction onClick={handleShowNavSide}>
          <i className='bx bx-menu'></i>
        </NavMenuAction>
        <Image src="/assets/images/brand.png" height={40} width={60} alt='brand-logo' />
        <NavLinkWrapper className='ga'>
          <NavLink href='#'>PRODUK</NavLink>
          <NavLink href='#'>KOMUNITAS</NavLink>
          <NavLink href='#'>PENDAFTARAN MITRA</NavLink>
          <NavLink href='#'>PRODUK</NavLink>
        </NavLinkWrapper>
        <NavActionWrapper>
          <NavAction $hideonsmall>
            <i className='bx bx-search'></i>
          </NavAction>
          <NavAction $hideonsmall={false}>
            <i className='bx bx-cart'></i>
          </NavAction>
          <NavAction $hideonsmall>
            <i className='bx bx-user'></i>
          </NavAction>
        </NavActionWrapper>
      </NavbarWrapper>
      <BackdropLayer $active={backdropLayerShow} onClick={() => {
        handleCloseNavSide()
      }}>
        <NavSide $active={navSideShow}>
          <Image src="/assets/images/brand.png" height={40} width={80} alt='brand-logo' />
        </NavSide>
      </BackdropLayer>
    </>
  )
}

export default Index