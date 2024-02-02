import React from 'react'
import styled from 'styled-components'
import { device } from '@/lib/media'
import { fontSize } from '@/lib/constant'

interface IProps { text: string, className?: string }
const SectionTitle = ({ text, className = '' }: IProps) => {
    return (
        <Title className={className}>{text}</Title>
    )
}

export default SectionTitle

const Title = styled.h1`
    color: var(--primary-color);
    text-align: center;
    font-size: ${fontSize.normal};
    
    @media  ${device.tablet} {
        font-size: ${fontSize.extraLarge};
    }
`