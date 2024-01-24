import React from 'react'
import { DescriptionProps } from './index'
import styled from 'styled-components'

function Description({
    text,
    className = ''
}: DescriptionProps) {
    return (
        <FooterDescription className={className}>{text}</FooterDescription>
    )
}

export default Description

const FooterDescription = styled.p`
    color: white;
    font-size: 1em;
    margin-bottom: 2rem;
`