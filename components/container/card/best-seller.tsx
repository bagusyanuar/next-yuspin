import React from 'react'
import Image from 'next/image'
import styled from "styled-components";
import { device } from '@/components/media'
import { CardBestSellerProps } from './index'

function BestSeller({
    image,
    name,
    price,
    className = '',
    locations = []
}: CardBestSellerProps) {
    return (
        <CardBestSellerWrapper className={`shadow-md ${className}`}>
            <ImageWrapper
                src={image}
                height={300}
                width={500}
                alt='img-product'
            />
            <ProductInformationWrapper>
                <ProductNameWrapper className='text-slate-800'>{name}</ProductNameWrapper>
                <ProductPriceWrapper className='text-primary'>Rp{price.toLocaleString('id-ID')}</ProductPriceWrapper>
                <ProductLocationWrapper>
                    <i className='bx bxs-map text-green-500 me-1'></i>
                    {
                        locations.map((v, k) => {
                            return <ProductAgentWrapper
                                key={k}
                                className='text-slate-500'>
                                {`${v},`}
                            </ProductAgentWrapper>
                        })
                    }
                </ProductLocationWrapper>
                <ProductRateWrapper>
                    <i className='bx bxs-star text-orange-500 me-1 '></i>
                    <ProductRateTextContent className='text-slate-500'>5</ProductRateTextContent>
                    <span className='text-slate-500 mx-1'>|</span>
                    <ProductRateTextContent className='text-slate-500'>7 terjual</ProductRateTextContent>
                </ProductRateWrapper>
            </ProductInformationWrapper>
        </CardBestSellerWrapper>
    )
}

export default BestSeller

const CardBestSellerWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 200px;
    height: 320px;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
`
const ImageWrapper = styled(Image)`
    width: 100%;
    height: 0px;
    flex: 3;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
    object-position: center center;
`

const ProductInformationWrapper = styled.div`
    flex: 2;
    width: 100%;
    height: 100%;
    padding: 0.1rem 0.5rem;
`

const ProductNameWrapper = styled.p`
    margin-bottom: 0;
    font-size: 0.8em;
`

const ProductPriceWrapper = styled.div`
    margin-bottom: 0;
    font-size: 1em;
    font-weight: bold;
`

const ProductLocationWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ProductAgentWrapper = styled.span`
    margin-bottom: 0;
    font-size: 0.7em;
`
const ProductRateWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ProductRateTextContent = styled.p`
    margin-bottom: 0;
    font-size: 0.7em;
`