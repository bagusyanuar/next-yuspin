import React from 'react'
import { StyledSidebarToggleWrapper } from '../styled.components'

const SidebarToggle = ({
    show,
    children = ''
}: IProps) => {
    return (
        <StyledSidebarToggleWrapper $show={show}>
            {children}
        </StyledSidebarToggleWrapper>
    )
}

export default SidebarToggle

interface IProps { show: boolean, children?: React.ReactNode }