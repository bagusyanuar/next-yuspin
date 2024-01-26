import React from 'react'
import { StyledButtonIcon } from './style'
import { IIconProps } from './type'

function ButtonIcon({
    children,
    icon,
    className = '',
    size = 'medium',
    type = 'primary',
    as = 'div'
}: IIconProps) {
    return (
        <StyledButtonIcon size={size} type={type} className={className} as={as}>
            <i className={`bx ${icon}`}></i>
            {children}
        </StyledButtonIcon>
    )
}

export default ButtonIcon