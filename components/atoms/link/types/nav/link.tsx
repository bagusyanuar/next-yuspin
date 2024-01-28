import React from 'react'
import { IProps } from '../../type'
import { StyledNavMenuLink } from '../../style'

function Link({
    text,
    to,
    className = '',
}: IProps) {
    return (
        <StyledNavMenuLink
            href={to}
            className={className}
        >
            {text}
        </StyledNavMenuLink>
    )
}

export default Link