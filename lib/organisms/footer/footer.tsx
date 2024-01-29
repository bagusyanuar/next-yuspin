import React from 'react'
import { FooterDescription, FooterMenu, FooterLocation, FooterSocialMedia } from '@/lib/molecules/footer'

import { StyledFooterWrapper, FooterInformationWrapper } from '../styled.components'

const Footer = ({ children = '' }: IProps) => {
    return (
        <StyledFooterWrapper>
            <FooterDescription />
            <FooterInformationWrapper>
                <FooterMenu />
                <FooterLocation />
                <FooterSocialMedia />
            </FooterInformationWrapper>
        </StyledFooterWrapper>
    )
}

export default Footer

interface IProps { children?: React.ReactNode }