import React from 'react'
import { IProps } from '../type'
import { StyledButton } from '../style'

function Base({
    children,
    className = '',
    size = 'medium',
    theme = 'primary',
}: IProps) {
    return (
        <StyledButton
            size={size}
            theme={theme}
            className={className}
        >
            {children}
        </StyledButton>
    )
}

export default Base

