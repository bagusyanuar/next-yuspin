import React from 'react'
import styled from 'styled-components'

import { device } from '@/components/media'
import BaseButton from '@/components/button'
import { HeroWrapperProps } from './index'


function Wrapper({
    children,
    className = ''
}: HeroWrapperProps) {
    return (
        <HeroWrapper className={`bg-primary-shades-90 ${className}`}>
            <LeftHeroWrapper>
                <p className='text-slate-700 brand-title'>Yuspin</p>
                <p className='text-slate-700 brand-description'>Produk kualitas terbaik, Pertama di Indonesia Dilengkapi dengan teknologi anti bakteri Silver+</p>
                <BaseButton className='inline-block w-fit !px-14 !text-sm' onClick={() => { }}>
                    Gabung Mitra
                </BaseButton>
            </LeftHeroWrapper>
            <RightHeroWrapper>
                <iframe
                    height="315"
                    src="https://www.youtube.com/embed/HeCvQtzgIC8?si=h0iz9NVMP94KIsMK"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='!w-full'
                ></iframe>
            </RightHeroWrapper>
        </HeroWrapper>
    )
}

export default Wrapper

const HeroWrapper = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    align-items:center;
    gap: 0.6rem;

    @media ${device.tabletL} {
        padding: 2rem 4rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    @media ${device.laptop} {
        padding: 2.5rem 8rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const LeftHeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    
    @media ${device.tabletL} {
        align-items: start;
    }

    @media ${device.laptop} {
        align-items: start;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        padding-left: 0;
        padding-right: 12rem;
    }

    .brand-title {
        font-size: 24px;
        margin-bottom: 1.5rem;
    }
    
    .brand-description {
        font-size: 14px;
        margin-bottom: 1.5rem;
        text-align: center;

        @media ${device.tabletL} {
            text-align: left;
        }

        @media ${device.laptop} {
            text-align: left;
        }
    }
`
const RightHeroWrapper = styled.div`
    width: 100%;
`