import React, { useState } from 'react'
import Image from 'next/image'
import {
  NavLinkWrapper,
  NavLink,
  NavActionWrapper,
  NavAction,
  NavMenu,
  NavSidebarBackdrop,
  NavSidebar
} from '@/components/navigation/navbar/styled-components'
import { device } from '@/components/media';
import styled from 'styled-components';

function Index() {
  const [backdropSidebarShow, setBackdropSidebarShow] = useState<boolean>(false);
  const [sidebarShow, setSidebarShow] = useState<boolean>(false);

  const handleShowNavSidebar = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setBackdropSidebarShow(!backdropSidebarShow)
    setTimeout(() => {
      setSidebarShow(!sidebarShow)
    }, 100);
  }

  const handleCloseSidebar = () => {
    setSidebarShow(false)
    setTimeout(() => {
      setBackdropSidebarShow(false)
    }, 200);
  }


  return (
    <>
      <Wrapper>
        <NavMenu onClick={handleShowNavSidebar}>
          <i className='bx bx-menu'></i>
        </NavMenu>
        <Image src="/assets/images/brand.png" height={40} width={60} alt='brand-logo' />
        <NavLinkWrapper className=''>
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
      </Wrapper>
      <NavSidebarBackdrop $active={backdropSidebarShow} onClick={handleCloseSidebar}>
        <NavSidebar $active={sidebarShow}>
          <Image src="/assets/images/brand.png" height={40} width={80} alt='brand-logo' />
        </NavSidebar>
      </NavSidebarBackdrop>
    </>
  )
}

export default Index

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    
    @media ${device.tabletS} {
      padding: 0.75rem 1.5rem;
    }
    
    @media ${device.laptop} {
      padding: 0.75rem 5rem;
    }
`