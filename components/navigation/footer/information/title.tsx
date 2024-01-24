import React from 'react'
import { FooterInformationTitleProps } from './index'
import styled from 'styled-components'

function Title({
    text,
    className = ''
}: FooterInformationTitleProps) {
    return (
        <FooterInformationTitle className={className}>{text}</FooterInformationTitle>
    )
}

export default Title

const FooterInformationTitle = styled.h1`
    color: rgba(255, 255, 255, 0.37);
`