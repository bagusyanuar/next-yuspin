import React from 'react'

import { NavSidebarTriggerLink } from '@/components/atoms/link'
import { IProps } from './type'

function Menu({
    icon,
    onClick
}: IProps) {
    return (
        <NavSidebarTriggerLink icon={icon} onClick={onClick} />
    )
}

export default Menu