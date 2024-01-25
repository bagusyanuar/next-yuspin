import React from 'react'
import styled from 'styled-components'
import { ISize, IProps, IStyledProps } from './text.types'
import { StyledText } from './text.styled'

function Text({
    text,
    size = 'medium',
    className = '',
    color = 'black',
    as = 'p'
}: IProps) {
    return (
        <StyledText size={size} color={color} as={as} className={className}>
            {text}
        </StyledText>
    )
}

export default Text