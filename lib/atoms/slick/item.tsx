import React from 'react'
import Image from 'next/image'
import { SlickItemWrapper } from '../styled.components'

const Item = ({
    imagePath,
    className = ''
}: IProps) => {
    return (
        <SlickItemWrapper className={className}>
            <Image src={imagePath} height={500} width={500} alt='slick-image'/>
        </SlickItemWrapper>
    )
}

export default Item

interface IProps { imagePath: string, className?: string }