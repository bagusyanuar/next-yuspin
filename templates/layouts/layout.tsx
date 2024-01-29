import React from 'react'
import Navbar from '@/lib/organisms/navbar'
import Footer from '@/lib/organisms/footer'
import { StyledContentWrapper } from '../styled.components'

function Layout({ children = '' }: IProps) {
    return (
        <main>
            <Navbar />
            <StyledContentWrapper>
                {children}
            </StyledContentWrapper>
            <Footer />
        </main>
    )
}

export default Layout

interface IProps { children?: React.ReactNode }