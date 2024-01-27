import React from 'react'

import { NavActionLink } from '@/components/atoms/link'
import { IProps } from './type'

function Menu({
    icon,
    onClick
}: IProps) {
    const handleClick = () => {

    }
    return (
        <div>
            <NavActionLink icon={icon} to='#' />
        </div>
    )
}

export default Menu