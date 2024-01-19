import React from 'react'

interface SectionTitleProps { text: string, className?: string }

function SectionTitle({ text, className = '' }: SectionTitleProps) {
    return (
        <h1 className={`w-full text-center text-primary text-sm ${className}`}>{text}</h1>
    )
}

export default SectionTitle