import React from 'react'
import { INavMenuProps } from '../../type'
import { StyledNavActionLink } from '../../style'

function Action({
    icon,
    to,
    children = '',
    className = '',
}: INavMenuProps) {
    return (
        <StyledNavActionLink href={to} className={className}>
            <i className={`bx ${icon}`}></i>
            {children}
        </StyledNavActionLink>
    )
}

export default Action