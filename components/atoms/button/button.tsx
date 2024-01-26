import React from 'react'
import { IProps } from './type'
import { StyledButton } from './style'

function Button({
    children,
    className = '',
    size = 'medium',
    type = 'primary',
    as = 'div'
}: IProps) {
    return (
        <StyledButton size={size} type={type} className={className} as={as}>
            {children}
        </StyledButton>
    )
}

export default Button

