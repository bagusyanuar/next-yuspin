import React from 'react'
import Wrapper from './wrapper'
import Link from './link'

export interface WrapperProps { children: React.ReactNode, className?: string }
export interface LinkProps { children: React.ReactNode | string, to: string, className?: string }

export const NavLink = Link
export default Wrapper
