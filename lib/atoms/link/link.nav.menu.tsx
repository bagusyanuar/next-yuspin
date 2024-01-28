import React from 'react'
import { StyledNavMenuLink } from '../styled.components'

const NavLinkMenu = ({
    icon,
    onClick = () => { },
    children,
    className = ''
}: IProps) => {
    return (
        <StyledNavMenuLink
            href='#'
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
            className={className}
        >
            <i className={`bx ${icon}`}></i>
            {children}
        </StyledNavMenuLink>
    )
}

export default NavLinkMenu

interface IProps { icon: string, onClick?: () => void, children?: React.ReactNode, className?: string }