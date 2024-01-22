import React from 'react'

import { device } from '@/components/media'
import styled from 'styled-components'
import { WrapperProps } from './index'

function Wrapper({ children, className = '' }: WrapperProps) {
    return (
        <NavActionWrapper className={className}>
            {children}
        </NavActionWrapper>
    )
}

export default Wrapper

export const NavActionWrapper = styled.div`
    display: flex;
    align-items: center;

    @media ${device.laptop} {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
`