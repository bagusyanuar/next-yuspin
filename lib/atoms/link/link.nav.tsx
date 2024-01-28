import React from 'react'
import { StyledNavLink } from '../styled.components'

const NavLink = ({
    text,
    to,
    className = ''
}: IProps) => {
    return (
        <StyledNavLink href={to} className={className}>
            {text}
        </StyledNavLink>
    )
}

export default NavLink

interface IProps { text: string, to: string, className?: string }