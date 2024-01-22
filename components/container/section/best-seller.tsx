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
    width: 100%;
    padding: 0.25rem 2rem;
    background-color: green;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-items: center;

    @media ${device.tabletS} {
      padding: 0.25rem 6rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
    @media ${device.tablet} {
      padding: 0.25rem 6rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    @media ${device.tabletL} {
      padding: 0.25rem 8rem;
    }

    @media ${device.laptopS} {
      padding: 0.25rem 2rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    
    @media ${device.laptop} {
      padding: 0.25rem 8rem;
      
    }
`
