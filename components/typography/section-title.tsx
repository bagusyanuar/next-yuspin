import React from 'react'
import styled from "styled-components";
import { device } from '@/components/media'

interface SectionTitleProps { text: string, className?: string }

function SectionTitle({ text, className = '' }: SectionTitleProps) {
    return (
        <SectionTitleWrapper className={`text-primary ${className}`}>
            {text}
        </SectionTitleWrapper>
    )
}

export default SectionTitle

const SectionTitleWrapper = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    margin-bottom: 1rem;

    @media ${device.tabletS} {
        font-size: 20px;
        margin-top: 1rem;
        margin-bottom: 1.25rem;
    }
    
    @media ${device.tablet} {
        font-size: 24px;
        margin-bottom: 2.5rem;
    }
`