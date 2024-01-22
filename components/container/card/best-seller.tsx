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
        <CardBestSellerWrapper>

        </CardBestSellerWrapper>
    )
}

export default BestSeller

const CardBestSellerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 250px;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    padding: 8px 12px;
`

