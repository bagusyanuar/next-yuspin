import React from 'react'
import { IProps } from '../type'
import { StyledLink } from '../style'

function Base({
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

export default Base