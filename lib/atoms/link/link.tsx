import React from 'react'
import { StyledLink } from '../styled.components'

const Link = ({
    text,
    to,
    className = '',
    color
}: IProps) => {
    return (
        <StyledLink href={to} className={className} $color={color}>
            {text}
        </StyledLink>
    )
}

export default Link

interface IProps { text: string, to: string, className?: string, color?: string }