import React from 'react'

import { NavActionLink } from '@/components/atoms/link'
import Badge from '@/components/atoms/badge'
import { IProps } from './type'
import { StyledWrapper } from './style'

function Action({
    items,
    className = ''
}: IProps) {
    return (
        <StyledWrapper className={className}>
            {
                items.map((v, k) => {
                    return <NavActionLink key={k} icon={v.icon} to={v.to} >
                        {v.showBadge ? <Badge value={v.badgeValue ? v.badgeValue : 0} /> : ''}
                    </NavActionLink>
                })
            }
        </StyledWrapper>
    )
}

export default Action