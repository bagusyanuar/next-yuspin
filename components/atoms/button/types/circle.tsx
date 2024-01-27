import React from 'react'
import { IProps } from '../type'
import { StyledCircleButton } from '../style'

function Circle({
    children,
    className = '',
    size = 'medium',
    theme = 'primary',
}: IProps) {
    return (
        <StyledCircleButton
            size={size}
            theme={theme}
            className={className}
        >
            {children}
        </StyledCircleButton>
    )
}

export default Circle