import React from 'react'
import { HeadingText } from '@/lib/atoms/text'
import { Technologies } from '@/lib/molecules/technologies'
import styled from 'styled-components'
import { device } from '@/lib/media'

const TechnologiesWrapper = ({ className = '' }: IProps) => {
    return (
        <div className={className}>
            <Title text='DILENGKAPI DENGAN TEKNOLOGI ANTI BAKTERI SILVER +' size='large' />
            <Technologies />
        </div>
    )
}

export default TechnologiesWrapper

interface IProps { className?: string }

const Title = styled(HeadingText)`
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1em;
    
    @media  ${device.tablet} {
        font-size: 1.5em;
        margin-bottom: 3rem;
    }
`