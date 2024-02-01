import React from 'react'
import { SlickWrapper } from '../styled.components'

const Wrapper = ({
    children,
    settings,
    height,
    className = ''
}: IProps) => {

    return (
        <SlickWrapper {...settings} adaptiveHeight $height={height} className={className}>
            {children}
        </SlickWrapper>
    )
}

export default Wrapper

interface IProps { children: React.ReactNode, settings: any, height: number, className?: string }