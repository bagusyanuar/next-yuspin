import React from 'react'
import Text, { HeadingText } from '@/lib/atoms/text'
import { StyledFooterDescriptionWrapper } from '../styled.components'

const Description = () => {
    return (
        <StyledFooterDescriptionWrapper>
            <HeadingText text='Yuspin - Cloth Your Napkins' size='medium' className='font-bold mb-32' />
            <Text
                text='"Pilihan Tepat Wanita Cermat" Yuspin adalah pembalut wanita yg sehat dan hemat yang di desain khusus dari bahan kaos yg nyaman dan dipadukan dengan bahan handuk kualitas terbaik sehingga memiliki daya serap tinggi, dan bahan pelapis anti bocor khusus yang memberi kenyamanan saat dipakai sehingga tidak mudah bocor.'
                size='medium'
            />
        </StyledFooterDescriptionWrapper>
    )
}

export default Description