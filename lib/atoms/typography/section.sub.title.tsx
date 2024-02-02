import React from 'react'
import styled from 'styled-components'
import { device } from '@/lib/media'
import { fontSize } from '@/lib/constant'

interface IProps { text: string, className?: string }

const SectionSubTitle = ({ text, className = '' }: IProps) => {
    return (
        <SubTitle className={className}>{text}</SubTitle>
    )
}

export default SectionSubTitle

const SubTitle = styled.p`
    color: var(--text-dark);
    text-align: center;
    font-size: ${fontSize.small};
    
    @media  ${device.tablet} {
        font-size: ${fontSize.normal};
    }
`
