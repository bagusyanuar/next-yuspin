import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '@/components/media'

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
    
    @media ${device.laptop} {
      padding: 0.75rem 5rem;
    }

`

const NavLinkWrapper = styled.div`
    display: none;
    gap: 0.25rem;

    @media ${device.laptop} {
      display: flex;
    }
`
const NavLink = styled.a`
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
      text-decoration: none;
      background-color: var(--primary-color);
      color: white;
    }
`

const NavActionWrapper = styled.div`
    display: none;

    @media ${device.laptop} {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
`

const NavAction = styled.a`
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
`

function Index() {
  return (
    <Navbar>
      <Image src="/assets/images/brand.png" height={40} width={60} alt='brand-logo' />
      <NavLinkWrapper className='ga'>
        <NavLink href='#'>PRODUK</NavLink>
        <NavLink href='#'>KOMUNITAS</NavLink>
        <NavLink href='#'>PENDAFTARAN MITRA</NavLink>
        <NavLink href='#'>PRODUK</NavLink>
      </NavLinkWrapper>
      <NavActionWrapper>
        <NavAction>
          <i className='bx bx-search'></i>
        </NavAction>
        <NavAction>
          <i className='bx bx-cart'></i>
        </NavAction>
        <NavAction>
          <i className='bx bx-user'></i>
        </NavAction>
      </NavActionWrapper>
    </Navbar>
  )
}

export default Index