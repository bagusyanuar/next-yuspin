import React from 'react'
import { IProps } from './type'
import { StyledText } from './style'

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