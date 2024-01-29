import React from 'react'
import { StyledSidebarBackdrop } from '../styled.components'

const Sidebar = ({
    show,
    children = '',
    onClick = () => { }
}: IProps) => {
    return (
        <StyledSidebarBackdrop $show={show} onClick={onClick}>
            {children}
        </StyledSidebarBackdrop>
    )
}

export default Sidebar

interface IProps { show: boolean, children?: React.ReactNode, onClick?: () => void }