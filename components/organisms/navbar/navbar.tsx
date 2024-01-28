import React, { useState } from 'react'

import Image from 'next/image'
import Sidebar from '@/components/atoms/sidebar'
import SidebarBackdrop from '@/components/atoms/backdrop'
import NavbarLinks from '@/components/molecules/navbar/link'
import NavbarActions from '@/components/molecules/navbar/action'
import NavbarSidebarTrigger from '@/components/molecules/navbar/sidebar-trigger'
import { StyledNavbarwrapper } from './style'
import { LinkItems, ActionItems } from './util'

function Navbar() {
    const [show, setShow] = useState<boolean>(false)
    const handleTriggerSidebar = () => {
        console.log('trigger clicked');
        setShow(!show)
    }

    return (
        <StyledNavbarwrapper>
            <SidebarBackdrop show={show} onClose={() => {setShow(false)}}>
                <Sidebar/>
            </SidebarBackdrop>
            <NavbarSidebarTrigger icon='bx-menu' onClick={handleTriggerSidebar} />
            <Image src="/assets/images/brand.png" height={40} width={60} alt='brand-logo' />
            <NavbarLinks items={LinkItems} />
            <NavbarActions items={ActionItems} />
        </StyledNavbarwrapper>
    )
}

export default Navbar