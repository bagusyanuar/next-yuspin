import React from 'react'
import Image from 'next/image'
import { SlickItemWrapper } from '../styled.components'

const Item = ({
    imagePath,
    className = ''
}: IProps) => {
    return (
        <SlickItemWrapper className={className}>
            <Image src={imagePath} height={1500} width={1500} alt='slick-image' placeholder='blur' blurDataURL={imagePath}/>
        </SlickItemWrapper>
    )
}

export default Item

interface IProps { imagePath: string, className?: string }