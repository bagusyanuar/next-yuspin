import React from 'react'
import Wrapper from './wrapper'
import Action from './action'

export interface WrapperProps { children: React.ReactNode, className?: string }
export interface ActionProps { children: React.ReactNode, className?: string, hideOnsmall?: boolean }

export default Wrapper
export const NavAction = Action