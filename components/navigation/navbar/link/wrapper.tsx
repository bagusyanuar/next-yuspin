import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { WrapperProps } from './index'

const NavLinkWrapper = styled.div`
    display: none;
    gap: 0.25rem;

    @media ${device.laptopS} {
    display: flex;
    }
`

function Wrapper({children, className = ''}: WrapperProps) {
    return (
        <NavLinkWrapper className={className}>
            {children}
        </NavLinkWrapper>
    )
}

export default Wrapper