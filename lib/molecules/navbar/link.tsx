import React from 'react'
import { NavLink } from '@/lib/atoms/link'
import { StyledNavbarLinkWrapper } from '../styled.components'

const NavbarLink = ({
    items,
    className = ''
}: IProps) => {
    return (
        <StyledNavbarLinkWrapper className={className}>
            {
                items.map((v, k) => {
                    return <NavLink key={k} text={v.text} to={v.to} />
                })
            }
        </StyledNavbarLinkWrapper>
    )
}

export default NavbarLink

type TItems = {
    to: string
    text: string
}

interface IProps { items: Array<TItems>, className?: string }