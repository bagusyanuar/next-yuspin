import React from 'react'
import { FooterDescription } from '@/lib/molecules/footer'

import { StyledFooterWrapper } from '../styled.components'

const Footer = ({ children = '' }: IProps) => {
    return (
        <StyledFooterWrapper>
            <FooterDescription />
        </StyledFooterWrapper>
    )
}

export default Footer

interface IProps { children?: React.ReactNode }