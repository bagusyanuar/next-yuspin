import React from 'react'
import styled from 'styled-components'

import { ButtonBaseProps } from './index'

function Base({
    children,
    onClick,
    className = ''
}: ButtonBaseProps) {
    return (
        <BaseButtonWrapper className={`bg-primary shadow-md ${className}`} onClick={() => { onClick() }}>
            {children}
        </BaseButtonWrapper>
    )
}

export default Base

const BaseButtonWrapper = styled.div`
    cursor: pointer;
    padding: 1rem 2.5rem;
    color: white;
    font-size: 1em;
    border-radius: 40px;
`