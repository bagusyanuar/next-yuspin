import React from 'react'
import { IProps } from './link.types'
import { StyledLink } from './link.styled'

function Link({
    text,
    to = '#',
    className = '',
    color = 'black',
    hoverColor
}: IProps) {
    return (
        <StyledLink
            href={to}
            className={className}
            color={color}
            hoverColor={hoverColor ? hoverColor : color}
        >
            {text}
        </StyledLink>
    )
}

export default Link