import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { WrapperProps } from './index'
import Sidebar from './sidebar'

function Wrapper({ children, className = '' }: WrapperProps) {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    const handleOpenSidebar = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setOpenSidebar(true)
    }

    const handleCloseSidebar = () => {
        setOpenSidebar(false)
    }

    return (
        <>
            <NavMenu href='#' onClick={handleOpenSidebar}>
                <i className='!text-slate-700 bx bx-menu'></i>
            </NavMenu>
            <Sidebar isOpen={openSidebar} onClose={handleCloseSidebar}>
                {children}
            </Sidebar>
        </>
    )
}

export default Wrapper

const NavMenu = styled.a`
    cursor: pointer;
    text-decoration: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(220, 220, 220, 0.3)
    }

    @media ${device.laptopS} {
      display: none;
    }
`