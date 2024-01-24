import React from 'react'
import Wrapper from './wrapper'
import Column from './column'
import Title from './title'

export interface FooterInformationWrapperProps {children: React.ReactNode, className?: string}
export interface FooterInformationColumnProps {children: React.ReactNode, className?: string}
export interface FooterInformationTitleProps {text: string, className?: string}

export const FooterInformationColumn = Column
export const FooterInformationTitle = Title
export default Wrapper