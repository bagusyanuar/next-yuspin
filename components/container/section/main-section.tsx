import React from 'react'
import styled from "styled-components";
import { device } from '@/components/media'
import { MainSectionProps } from './index'

function MainSection({ children, className = '' }: MainSectionProps) {
    return (
        <MainSectionWrapper className={className}>
            {children}
        </MainSectionWrapper>
    )
}

export default MainSection

const MainSectionWrapper = styled.section`
    padding: 0.25rem 0.5rem;

    @media ${device.tablet} {
        padding: 0.5rem 1rem;
    }

    @media ${device.laptop} {
        padding: 1rem 2rem;
    }
`