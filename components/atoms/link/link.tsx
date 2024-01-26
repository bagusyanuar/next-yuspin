import React from 'react'
import { IProps } from './link.types'
import { StyledLink } from './link.styled'

function Link({
    text,
    to = '#',
    className = '',
    color = 'black',
}: IProps) {
    return (
        <StyledLink
            href={to}
            className={className}
            color={color}
        >
            {text}
        </StyledLink>
    )
}

export default Link