import React from 'react'
import MainSection from './main-section'
import Technology from './technology'

export default MainSection
export const SectionTechnology = Technology

export interface MainSectionProps { children: React.ReactNode, className?: string }
export interface TechnologySectionProps { children: React.ReactNode, className?: string }
