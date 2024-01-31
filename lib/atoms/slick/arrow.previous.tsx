import React from 'react'
import { SlickPrevArrow } from '../styled.components'

const PreviousArrow = (props: any) => {
    return (
        <SlickPrevArrow {...props}>
            <i className='bx bx-left-arrow-alt'></i>
        </SlickPrevArrow>
    )
}

export default PreviousArrow