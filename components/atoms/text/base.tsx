import React from 'react'
import { ISize, IProps, IStyledProps } from './types'
import styled from 'styled-components'

function Base({ 
    text,
    size = 'medium',
    className = '',
    color = 'black',
    as = 'p'
}: IProps) {
    return (
        <StyledBase fontSize={size} as={as} className={className}>
            {text}
        </StyledBase>
    )
}

export default Base

const TextStyled: ISize = {
    small: '0.8em',
    medium: '1em',
    large: '1.25em'
}

const StyledBase = styled.p<IStyledProps>`
    font-size: ${({ fontSize }) => TextStyled[fontSize]}
`
