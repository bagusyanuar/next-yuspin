import React from 'react'
import styled from "styled-components";
import { device } from '@/components/media'
import { TechnologySectionProps } from './index'

function Technology({ children, className = '' }: TechnologySectionProps) {
  return (
    <TechnologySectionWrapper className=''>
      {children}
    </TechnologySectionWrapper>
  )
}

export default Technology

const TechnologySectionWrapper = styled.section`
    padding: 0.25rem 2rem;
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));

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