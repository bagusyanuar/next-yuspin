import React from 'react'
import { FooterInformationColumnProps } from './index'
import styled from 'styled-components'

function Column({
    children,
    className = ''
}: FooterInformationColumnProps) {
    return (
        <FooterInformationColumn className={className}>{children}</FooterInformationColumn>
    )
}

export default Column

const FooterInformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem;
    align-items: start;
`