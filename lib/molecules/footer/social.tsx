import React from 'react'
import {
    FooterInformationColumnWrapper,
    FooterInformationTitle,
    FooterInformatioSocialMediaIcon,
    FooterInformatioSocialMediaWrapper
} from '../styled.components'

const Social = () => {
    return (
        <FooterInformationColumnWrapper>
            <FooterInformationTitle text='SOSIAL MEDIA' size='medium' />
            <FooterInformatioSocialMediaWrapper>
                <FooterInformatioSocialMediaIcon href='#'>
                    <i className='bx bxl-facebook-circle' ></i>
                </FooterInformatioSocialMediaIcon>
                <FooterInformatioSocialMediaIcon href='#'>
                    <i className='bx bxl-instagram'></i>
                </FooterInformatioSocialMediaIcon>
                <FooterInformatioSocialMediaIcon href='#'>
                    <i className='bx bxl-tiktok' ></i>
                </FooterInformatioSocialMediaIcon>
                <FooterInformatioSocialMediaIcon href='#'>
                    <i className='bx bxl-youtube' ></i>
                </FooterInformatioSocialMediaIcon>
            </FooterInformatioSocialMediaWrapper>
        </FooterInformationColumnWrapper>
    )
}

export default Social