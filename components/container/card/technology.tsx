import React from 'react'
import { CardTechnologyProps } from './index'
import { CardTechnologyWrapper, CardTechnologyImage, CardTechnologyTitle, CardTechnologyDescription } from './styled-components'

function Technology({
    image,
    title,
    description,
    className = ''
}: CardTechnologyProps) {
    return (
        <CardTechnologyWrapper className={className}>
            <CardTechnologyImage height={64} width={64} src={image} alt='technology-image' className='mb-3'/>
            <CardTechnologyTitle className='mb-2'><p>{title}</p></CardTechnologyTitle>
            <CardTechnologyDescription><p>{description}</p></CardTechnologyDescription>
        </CardTechnologyWrapper>
    )
}

export default Technology