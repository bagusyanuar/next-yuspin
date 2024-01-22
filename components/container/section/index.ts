import React from 'react'
import MainSection from './main-section'
import Technology from './technology'
import BestSeller from './best-seller'

export default MainSection
export const SectionTechnology = Technology
export const SectionBestSeller = BestSeller

export interface MainSectionProps { children: React.ReactNode, className?: string }
export interface TechnologySectionProps { children: React.ReactNode, className?: string }
export interface BestSellerSectionProps { children: React.ReactNode, className?: string }
