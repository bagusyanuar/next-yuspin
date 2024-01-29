import React from 'react'
import { FooterDescription, FooterMenu, FooterLocation } from '@/lib/molecules/footer'

import { StyledFooterWrapper, FooterInformationWrapper } from '../styled.components'

const Footer = ({ children = '' }: IProps) => {
    return (
        <StyledFooterWrapper>
            <FooterDescription />
            <FooterInformationWrapper>
                <FooterMenu />
                <FooterLocation />
            </FooterInformationWrapper>
        </StyledFooterWrapper>
    )
}

export default Footer

interface IProps { children?: React.ReactNode }