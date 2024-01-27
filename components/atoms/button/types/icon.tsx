import React from 'react'
import { StyledButtonIcon } from '../style'
import { IIconProps } from '../type'

function Icon({
    children,
    icon,
    addon = 'prepend',
    className = '',
    size = 'medium',
    theme = 'primary',
}: IIconProps) {
    return (
        <StyledButtonIcon size={size} theme={theme} className={className} $addon={addon}>
            {
                addon === 'prepend' ? <i className={`bx ${icon}`}></i> : ''
            }
            {children}
            {
                addon === 'append' ? <i className={`bx ${icon}`}></i> : ''
            }
        </StyledButtonIcon>
    )
}

export default Icon