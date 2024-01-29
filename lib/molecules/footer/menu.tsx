import React from 'react'
import {
    FooterInformationColumnWrapper,
    FooterInformationTitle,
    FooterInformationLink
} from '../styled.components'

const Menu = () => {
    return (
        <FooterInformationColumnWrapper>
            <FooterInformationTitle text='YUSPIN' size='medium' />
            <FooterInformationLink text='PRODUK' to='/produk' color='white' />
            <FooterInformationLink text='KOMUNITAS' to='/komunitas' color='white' />
            <FooterInformationLink text='PENDAFTARAN MITRA' to='/pendaftaran-mitra' color='white' />
            <FooterInformationLink text='TENTANG YUSPIN' to='/tentang-yuspin' color='white' />
        </FooterInformationColumnWrapper>
    )
}

export default Menu