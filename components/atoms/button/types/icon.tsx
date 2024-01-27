import React from 'react'
import { StyledButtonIcon } from '../style'
import { IIconProps } from '../type'

function Icon({
    children,
    icon,
    addOn = 'prepend',
    className = '',
    size = 'medium',
    theme = 'primary',
}: IIconProps) {
    return (
        <StyledButtonIcon size={size} theme={theme} className={className} addOn={addOn}>
            {
                addOn === 'prepend' ? <i className={`bx ${icon}`}></i> : ''
            }
            {children}
            {
                addOn === 'append' ? <i className={`bx ${icon}`}></i> : ''
            }
        </StyledButtonIcon>
    )
}

export default Icon