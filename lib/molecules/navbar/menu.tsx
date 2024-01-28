import React from 'react'
import { NavMenuLink } from '@/lib/atoms/link'
import { StyledNavbarMenuWrapper } from '../styled.components'

const NavbarMenu = () => {
    return (
        <StyledNavbarMenuWrapper>
            <NavMenuLink icon='bx-cart' />
            <NavMenuLink icon='bx-user' />
        </StyledNavbarMenuWrapper>
    )
}

export default NavbarMenu