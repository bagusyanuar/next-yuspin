import React from 'react'

import styled from 'styled-components'
import { device } from '@/components/media'
import { ActionProps } from './index'

function Action({
    children,
    className = '',
    hideOnsmall = true
}: ActionProps) {
    return (
        <NavAction className={`!text-slate-700 ${className}`} $hideonsmall={hideOnsmall}>
            {children}
        </NavAction>
    )
}

export default Action

export const NavAction = styled.a<{ $hideonsmall: boolean }>`
    cursor: pointer;
    text-decoration: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: ${props => props.$hideonsmall ? 'none' : 'flex'};
    position: relative;
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
      display: flex;
      align-items: center;
    }

    &:hover {
      background-color: rgba(220, 220, 220, 0.3)
    }
`

NavAction.defaultProps = {
    $hideonsmall: true
}