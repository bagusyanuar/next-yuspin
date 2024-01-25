import React from 'react'
import { IProps } from './link.types'
import { StyledLink } from './link.styled'

function Link({
    text,
    to = '#',
    className = ''
}: IProps) {
    return (
        <StyledLink href={to} className={className}>
            {text}
        </StyledLink>
    )
}

export default Link