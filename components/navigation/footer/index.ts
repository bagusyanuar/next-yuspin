import React from 'react'
import Wrapper from './wrapper'
import TagLine from './tagline'
import Description from './description'

export interface FooterWrapperProps {children: React.ReactNode, className?: string}
export interface TagLineProps {text: string, className?: string}
export interface DescriptionProps {text: string, className?: string}
export interface InformationTitleProps {text: string, className?: string}

export const FooterTagLine = TagLine
export const FooterDescription = Description
export default Wrapper