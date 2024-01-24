import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, className?: string }

function FooterInformationTitle({
    text,
    className = ''
}: IProps) {
    return (
        <StyledFooterInformationTitle className={className}>
            {text}
        </StyledFooterInformationTitle>
    )
}

export default FooterInformationTitle

const StyledFooterInformationTitle = styled.h1`
    color: rgba(255, 255, 255, 0.37);
`