import React from 'react'
import { ContainerWrapper } from './styled-components'

interface ContainerProps { children: React.ReactNode, className?: string }

function Index({ children, className = '' }: ContainerProps) {
    return (
        <ContainerWrapper className={className}>
            {children}
        </ContainerWrapper>
    )
}

export default Index