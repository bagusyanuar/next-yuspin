import React from 'react'
import { INavSidebarTriggerProps } from '../../type'
import { StyledNavSidebarTriggerLink } from '../../style'

function SidebarTrigger({
    icon,
    className = '',
    onClick
}: INavSidebarTriggerProps) {
    return (
        <StyledNavSidebarTriggerLink
            href='#'
            className={className}
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
        >
            <i className={`bx ${icon}`}></i>
        </StyledNavSidebarTriggerLink>
    )
}

export default SidebarTrigger