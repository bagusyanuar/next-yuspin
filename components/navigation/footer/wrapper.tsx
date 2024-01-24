import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { FooterWrapperProps } from './index'


function Wrapper({
    children,
    className = ''
}: FooterWrapperProps) {
    return (
        <FooterWrapper className={`bg-primary ${className}`}>
            {children}
        </FooterWrapper>
    )
}

export default Wrapper

const FooterWrapper = styled.div`
    padding: 1rem 2rem;
    width: 100%;
    gap: 0.4rem;

    @media ${device.tablet} {
        padding: 4rem 8rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`