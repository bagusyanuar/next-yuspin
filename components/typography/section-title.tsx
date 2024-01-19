import React from 'react'
import { SectionTitleWrapper } from './styled-components'

interface SectionTitleProps { text: string, className?: string }

function SectionTitle({ text, className = '' }: SectionTitleProps) {
    return (
        <SectionTitleWrapper className={`text-primary ${className}`}>
            {text}
        </SectionTitleWrapper>
        // <h1 className={`w-full text-center text-primary text-sm ${className}`}>{text}</h1>
    )
}

export default SectionTitle