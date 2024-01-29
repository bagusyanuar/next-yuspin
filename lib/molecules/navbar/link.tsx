import React from 'react'
import { NavLink } from '@/lib/atoms/link'
import { StyledNavbarLinkWrapper } from '../styled.components'

const NavbarLink = ({ className = '' }: IProps) => {
    return (
        <StyledNavbarLinkWrapper className={className}>
            <NavLink text='PRODUK' to='/produk' />
            <NavLink text='KOMUNITAS' to='/komunitas' />
            <NavLink text='PENDAFTARAN MITRA' to='/pendaftaran-mitra' />
            <NavLink text='TENTANG' to='/tentang' />
        </StyledNavbarLinkWrapper>
    )
}

export default NavbarLink

interface IProps { className?: string }