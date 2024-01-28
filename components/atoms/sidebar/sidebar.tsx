import React from 'react'
import { StyledSidebarWrapper } from './style'

interface IProps { children?: React.ReactNode }
function Sidebar({
    children = ''
}: IProps) {
    return (
        <StyledSidebarWrapper>
            {children}
        </StyledSidebarWrapper>
    )
}

export default Sidebar