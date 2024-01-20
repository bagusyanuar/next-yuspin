import React from 'react'
import Image from 'next/image'
import styled from "styled-components";
import { device } from '@/components/media'
import { CardTechnologyProps } from './index'

function Technology({
    image,
    title,
    description,
    className = ''
}: CardTechnologyProps) {
    return (
        <CardTechnologyWrapper className={className}>
            <CardTechnologyImage height={64} width={64} src={image} alt='technology-image' className='mb-3'/>
            <CardTechnologyTitle className='mb-2'><p>{title}</p></CardTechnologyTitle>
            <CardTechnologyDescription><p>{description}</p></CardTechnologyDescription>
        </CardTechnologyWrapper>
    )
}

export default Technology

const CardTechnologyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    padding: 8px 12px;
`
const CardTechnologyImage = styled(Image)`
    height: 48px;
    width: 48px;

    @media ${device.tabletS} {
        height: 64px;
        width: 64px;
    }
` 

const CardTechnologyTitle = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;

        @media ${device.tabletS} {
            font-size: 16px;
        }
    }
`

const CardTechnologyDescription = styled.div`
    width: 100%;
    flex-grow: 1;
    p {
        text-align: center;
        font-size: 12px;
        margin-bottom: 0;

        @media ${device.tabletS} {
            font-size: 14px;
        }
    }
`

// overflow: hidden;
//         display: -webkit-box;
//         -webkit-line-clamp: 6;
//         -webkit-box-orient: vertical;
//         text-overflow: ellipsis;