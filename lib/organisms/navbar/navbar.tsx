import React, { useState } from 'react'

import Image from 'next/image'
import { NavbarLinks, NavbarMenus, SidebarTrigger } from '@/lib/molecules/navbar'
import { StyledNavbarWrapper } from '../styled.components'

function Navbar() {
    return (
        <StyledNavbarWrapper>
            <SidebarTrigger>
                <Image src="/assets/images/brand.png" height={40} width={80} alt='brand-logo' />
            </SidebarTrigger>
            <Image src="/assets/images/brand.png" height={40} width={60} alt='brand-logo' />
            <NavbarLinks />
            <NavbarMenus />
        </StyledNavbarWrapper>
    )
}

export default Navbar
