import React from 'react'
import { TagLineProps } from './index'
import styled from 'styled-components'

function TagLine({
    text,
    className = ''
}: TagLineProps) {
    return (
        <FooterTagLine className={className}>{text}</FooterTagLine>
    )
}

export default TagLine

const FooterTagLine = styled.h1`
    color: white;
    margin-bottom: 2rem;
    font-size: 1.25em;
`