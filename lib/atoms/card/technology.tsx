import React from 'react'
import Image from 'next/image'
import { CardTechnologyWrapper } from '../styled.components'

const Technology = ({
    icon,
    title,
    description,
    className = ''
}: IProps) => {
    return (
        <CardTechnologyWrapper className={className}>
            <Image src={icon} height={65} width={65} alt='icon-technology' />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </CardTechnologyWrapper>
    )
}

export default Technology

interface IProps { icon: string, title: string, description: string, className?: string }