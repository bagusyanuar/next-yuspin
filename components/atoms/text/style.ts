import styled from "styled-components";
import { IStyledProps, ISize } from './type'

const sizeProps: ISize = {
    'extra-small': {
        fontSize: '0.6em',
    },
    'small': {
        fontSize: '0.8em',
    },
    'medium': {
        fontSize: '1em',
    },
    'large': {
        fontSize: '1.25em',
    },
    'extra-large': {
        fontSize: '1.5em',
    },
}

export const StyledText = styled.p<IStyledProps>`
    font-size: ${({ size }) => sizeProps[size].fontSize};
    color: ${({ color }) => color}
`