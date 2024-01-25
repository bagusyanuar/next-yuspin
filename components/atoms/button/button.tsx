import React from 'react'
import { ISize, IStyledProps, IProps } from './button.types'
import { StyledButton } from './button.styled'

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

