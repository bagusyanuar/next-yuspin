import React from 'react'

import { device } from '../media'
import styled from 'styled-components'
import { SectionSubTitleProps } from './index'


function SectionSubTitle({ text, className = '' }: SectionSubTitleProps) {
    return (
        <SectionSubTitleWrapper className={`text-slate-700 ${className}`}>
            {text}
        </SectionSubTitleWrapper>
    )
}

export default SectionSubTitle

const SectionSubTitleWrapper = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin-top: 0.25rem;
    margin-bottom: 1rem;

    @media ${device.tabletS} {
        font-size: 14px;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
    
    @media ${device.tablet} {
        font-size: 14px;
        margin-bottom: 2rem;
`        