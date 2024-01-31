import React from 'react'
import Slider from 'react-slick'

const Wrapper = ({
    children,
    settings
}: IProps) => {
    
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default Wrapper

interface IProps { children: React.ReactNode, settings: any }