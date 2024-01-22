import React from 'react'
import Image from 'next/image'
import NavActionWrapper, { NavAction } from './action'
import NavLinkWrapper, { NavLink } from './link'
import NavMenu from './menu'
import { device } from '@/components/media';
import styled from 'styled-components';

function Index() {
  return (
    <>
      <Wrapper>
        <NavMenu>
          <Image src="/assets/images/brand.png" height={40} width={80} alt='brand-logo' />
        </NavMenu>
        <Image src="/assets/images/brand.png" height={40} width={60} alt='brand-logo' />
        <NavLinkWrapper className=''>
          <NavLink to='#'>PRODUK</NavLink>
          <NavLink to='#'>KOMUNITAS</NavLink>
          <NavLink to='#'>PENDAFTARAN MITRA</NavLink>
          <NavLink to='#'>PRODUK</NavLink>
        </NavLinkWrapper>
        <NavActionWrapper>
          <NavAction hideOnsmall={false}>
            <i className='bx bx-cart'></i>
            <Badge className='bg-primary'>99</Badge>
          </NavAction>
          <NavAction>
            <i className='bx bx-user'></i>
          </NavAction>
        </NavActionWrapper>
      </Wrapper>
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

const Badge = styled.div`
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    color: white;
    top: 2px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px !important;
`