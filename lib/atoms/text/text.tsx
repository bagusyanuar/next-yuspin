import React from 'react'
import { TextSizeOptions, TextOptions } from '../props'
import { StyledText } from '../styled.components'

const Text = ({
    text,
    size,
    className = '',
    as = 'p'
}: IProps) => {
    return (
        <StyledText $size={size} as={as} className={className}>
            {text}
        </StyledText>
    )
}

export default Text

interface IProps { text: string, size: TextSizeOptions, className?: string, as?: TextOptions }