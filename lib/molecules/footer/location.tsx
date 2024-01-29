import React from 'react'
import Text from '@/lib/atoms/text'
import {
    FooterInformationColumnWrapper,
    FooterInformationTitle,
    FooterInformatioLocationWrapper,
    FooterInformatioLocationIcon
} from '../styled.components'

const Location = () => {
  return (
    <FooterInformationColumnWrapper>
        <FooterInformationTitle text='KONTAK' size='medium' />
        <FooterInformatioLocationWrapper>
            <FooterInformatioLocationIcon className='bx bx-envelope' />
            <Text text='yuspinofficial@gmail.com' size='medium' />
        </FooterInformatioLocationWrapper>
        <FooterInformatioLocationWrapper>
            <FooterInformatioLocationIcon className='bx bxl-whatsapp' />
            <Text text='0813-2755-5004' size='medium' />
        </FooterInformatioLocationWrapper>
        <FooterInformatioLocationWrapper>
            <FooterInformatioLocationIcon className='bx bxs-map' />
            <Text text='CV YUSPIN (Jl Raya Padokan No 008, Sawahan, Ngemplak, Boyolali)' size='medium' />
        </FooterInformatioLocationWrapper>
    </FooterInformationColumnWrapper>
  )
}

export default Location