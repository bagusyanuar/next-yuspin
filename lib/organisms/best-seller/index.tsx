import React from 'react'
import { HeadingText } from '@/lib/atoms/text'
import styled from 'styled-components'
import { device } from '@/lib/media'

const BestSeller = ({ className = '' }: IProps) => {
    return (
        <div className={className}>
            <Title text='BEST SELLER' size='large' />
        </div>
    )
}

export default BestSeller

interface IProps { className?: string }

const Title = styled(HeadingText)`
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1em;
    
    @media  ${device.tablet} {
        font-size: 1.5em;
    }
`