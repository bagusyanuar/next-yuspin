import React from 'react'
import { StyledBackdrop } from './style'

interface IProps { show: boolean, children?: React.ReactNode ,onClose?: () => void }
function Backdrop({
    show,
    children = '',
    onClose = () => { }
}: IProps) {
    return (
        <StyledBackdrop
            $show={show}
            onClick={onClose}
        >
            {children}
        </StyledBackdrop>
    )
}

export default Backdrop