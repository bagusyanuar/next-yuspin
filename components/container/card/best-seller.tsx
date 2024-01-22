import React from 'react'
import styled from "styled-components";
import { device } from '@/components/media'
import { CardBestSellerProps } from './index'

function BestSeller({
    image,
    name,
    price,
    className = ''
}: CardBestSellerProps) {
    return (
        <CardBestSellerWrapper className={className}>

        </CardBestSellerWrapper>
    )
}

export default BestSeller

const CardBestSellerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 250px;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    padding: 8px 12px;

    @media ${device.tablet} {
        width: calc((100% - 15rem) / 2);
    }
    
    @media ${device.laptopS} {
        width: calc((100% - 2.5rem) / 4);
    }
    
    @media ${device.laptop} {
        width: calc((100% - 5rem) / 4);
    }
`

