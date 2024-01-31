import React from 'react'
import { CustomArrowProps } from 'react-slick'
import { SlickPrevArrow } from '../styled.components'

const PreviousArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
    return (
        <SlickPrevArrow {...props}>
            <i className='bx bx-left-arrow-alt'></i>
        </SlickPrevArrow>
    )
}

export default PreviousArrow