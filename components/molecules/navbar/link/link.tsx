import React from 'react'

import { NavLink } from '@/components/atoms/link'
import { IProps } from './type'
import { StyledWrapper } from './style'

function Link({
    items,
    className = ''
}: IProps) {
    return (
        <StyledWrapper className={className}>
            {
                items.map((v, k) => {
                    return <NavLink key={k} to={v.to} text={v.text} />
                })
            }
        </StyledWrapper>
    )
}

export default Link