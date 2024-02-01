import React from 'react'

import { SlickWrapper, SlickItem, SlickNextArrow, SlickPrevArrow } from '@/lib/atoms/slick'

function Banner({
    className = ''
}: IProps) {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
    }
    return (
        <SlickWrapper settings={settings} height={500} className={className}>
            <SlickItem imagePath='/assets/sliders/slider-1.jpg' />
            <SlickItem imagePath='/assets/sliders/slider-2.jpg' />
        </SlickWrapper>
    )
}

export default Banner

interface IProps { className?: string }
