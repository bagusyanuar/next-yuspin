import React from 'react'
import { NavMenuLink } from '@/lib/atoms/link'
import { StyledNavbarMenuWrapper } from '../styled.components'

interface IProps { className?: string }

const NavbarMenu = ({ className = '' }: IProps) => {
    return (
        <StyledNavbarMenuWrapper className={className}>
            <NavMenuLink
                icon='bx-cart'
                onClick={() => { }}
            />
            <NavMenuLink
                icon='bx-user'
                onClick={() => { }}
            />
        </StyledNavbarMenuWrapper>
    )
}

export default NavbarMenu