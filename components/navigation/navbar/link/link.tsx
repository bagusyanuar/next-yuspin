import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { LinkProps } from './index'

function Link({ children, to ,className = '' }: LinkProps) {
    return (
        <NavLink href={to} className={`text-slate-700 ${className}`}>{children}</NavLink>
    )
}

export default Link

const NavLink = styled.a`
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
    &:hover {
      text-decoration: none;
      background-color: var(--primary-color);
      color: white;
    }
`