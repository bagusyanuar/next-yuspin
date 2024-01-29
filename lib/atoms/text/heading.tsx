import React from 'react'
import { TextSizeOptions, HeadingOptions } from '../props'
import { StyledText } from '../styled.components'

function Heading({
    text,
    size,
    className = '',
    as = 'h1'
}: IProps) {
    return (
        <StyledText $size={size} as={as} className={`${className}`}>
            {text}
        </StyledText>
    )
}

export default Heading

interface IProps { text: string, size: TextSizeOptions, className?: string, as?: HeadingOptions }