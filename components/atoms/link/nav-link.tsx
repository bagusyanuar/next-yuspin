import React from 'react'
import { IProps } from './link.types'
import { StyledNavLink } from './link.styled'

function NavLink({
    text,
    to = '#',
    className = ''
}: IProps) {
    return (
        <StyledNavLink href={to} className={className}>
            {text}
        </StyledNavLink>
    )
}

export default NavLink