import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { BestSellerSectionProps } from './index'

function BestSeller({
    children,
    className = ''
}: BestSellerSectionProps) {
    return (
        <BestSellerWrapper>
            {children}
        </BestSellerWrapper>
    )
}

export default BestSeller

const BestSellerWrapper = styled.section`
    padding: 0.25rem 4.5rem;
    background-color: green;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media ${device.tabletS} {
      padding: 0.25rem 8rem;
    }
    
    @media ${device.tablet} {
      padding: 0.25rem 6rem;
    }
    
    @media ${device.tabletL} {
      padding: 0.25rem 8rem;
    }

    @media ${device.laptopS} {
      padding: 0.25rem 2rem;
    }
    
    @media ${device.laptop} {
      padding: 0.25rem 8rem;
    }
`
