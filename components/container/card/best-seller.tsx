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
            <Image
                src={image}
                height={300}
                width={500}
                alt='img-product'
            />
            <div className='h-full w-100 product-information'>
                <p className='product-name text-slate-800'>{name}</p>
                <p className='product-price text-primary'>Rp{price.toLocaleString('id-ID')}</p>
                <div className='product-location'>
                    <i className='bx bxs-map text-green-500 me-1'></i>
                    {
                        locations.map((v, k) => {
                            return <span key={k} className='product-agent text-slate-500'>{`${v},`}</span>
                        })
                    }
                </div>
                <div className='product-rate'>
                    <i className='bx bxs-star text-orange-500 me-1 '></i>
                    <p className='text-slate-500'>5</p>
                    <span className='text-slate-500 mx-1'>|</span>
                    <p className='text-slate-500'>7 terjual</p>
                </div>
            </div>
        </CardBestSellerWrapper>
    )
}

export default BestSeller

const CardBestSellerWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 190px;
    height: 300px;
    align-items: center;
    justify-content: start;
    border-radius: 8px;

    img {
        width: 100%;
        height: 0px;
        flex: 2;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        object-fit: cover;
        object-position: center center;
    }

    .product-information {
        flex: 1.5;
        width: 100%;
        padding: 0.1rem 0.5rem;

        .product-name {
            margin-bottom: 0;
            font-size: 0.8em;
        }

        .product-price {
            margin-bottom: 0;
            font-size: 1em;
            font-weight: bold;
        }

        .product-location {
            display: flex;
            align-items: center;

            .product-agent {
                margin-bottom: 0;
                font-size: 0.7em;
            }
        }

        .product-rate {
            display: flex;
            align-items: center;

            p {
                margin-bottom: 0;
                font-size: 0.7em;
            }
        }
    }
`

