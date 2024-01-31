import React from 'react'
import { CustomArrowProps } from 'react-slick'
import { SlictNextArrow } from '../styled.components'

const NextArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
    return (
        <SlictNextArrow {...props}>
            <i className='bx bx-right-arrow-alt'></i>
        </SlictNextArrow>
    )
}

export default NextArrow