import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '@/components/media'
import { SidebarProps } from './index'

function Sidebar({
    children,
    isOpen,
    onClose,
    className = '',
}: SidebarProps) {

    const [backdropShow, setBackdropShow] = useState<boolean>(isOpen)
    const [sidebarShow, setSidebarShow] = useState<boolean>(isOpen)

    const handleClose = () => {
        onClose()
    }
    
    useEffect(() => {
        if (isOpen) {
            setBackdropShow(isOpen)
            setTimeout(() => {
                setSidebarShow(isOpen)
            }, 100);
        } else {
            setSidebarShow(isOpen)
            setTimeout(() => {
                setBackdropShow(isOpen)
            }, 200);
        }
    }, [isOpen])

    return (
        <Backdrop
            className={className}
            $active={backdropShow}
            onClick={handleClose}>
            <NavSidebar $active={sidebarShow}>
                {children}
            </NavSidebar>
        </Backdrop>
    )
}

export default Sidebar

const Backdrop = styled.div<{ $active: boolean }>`
    display: ${(props) => props.$active ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`

const NavSidebar = styled.div<{ $active: boolean }>`
    position: fixed;
    top: 0;
    transform: ${(props) => props.$active ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 1rem 0.5rem;
`