import React from 'react'

import { InformationTitleProps } from './index'
import styled from 'styled-components'

function InformationTitle({
    text,
    className = ''
}: InformationTitleProps) {
    return (
        <FooterInformationTittle>{text}</FooterInformationTittle>
    )
}

export default InformationTitle

const FooterInformationTittle = styled.p`
    color: rgba(255, 255, 255, 0.37);

`