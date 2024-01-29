import React, { useState } from 'react'
import { BackdropSidebar } from '@/lib/atoms/backdrop'
import { SidebarToggle } from '@/lib/atoms/sidebar'
import { StyledSidebarTrigger } from '../styled.components'

function Trigger({ children = '' }: IProps) {
    const [showBackdrop, setShowBackdrop] = useState<boolean>(false)
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    const handleShowBackdrop = () => {
        setShowBackdrop(true)
        setTimeout(() => {
            setShowSidebar(true)
        }, 100);
    }

    const handleCloseBackdrop = () => {
        setShowSidebar(false)
        setTimeout(() => {
            setShowBackdrop(false)
        }, 200);
    }

    return (
        <>
            <StyledSidebarTrigger icon='bx-menu' onClick={handleShowBackdrop} />
            <BackdropSidebar show={showBackdrop} onClick={handleCloseBackdrop}>
                <SidebarToggle show={showSidebar}>
                    {children}
                </SidebarToggle>
            </BackdropSidebar>
        </>
    )
}

export default Trigger

interface IProps { children?: React.ReactNode }