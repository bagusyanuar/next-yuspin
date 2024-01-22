import React from 'react'
import Wrapper from './wrapper'

export interface WrapperProps { children: React.ReactNode, className?: string }
export interface SidebarProps { children: React.ReactNode, isOpen: boolean, className?: string, onClose: () => void  }

export default Wrapper