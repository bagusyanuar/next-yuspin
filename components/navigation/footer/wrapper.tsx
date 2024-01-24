import React from 'react'
import styled from 'styled-components'
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
    padding: 4rem 8rem;
    width: 100%;
`