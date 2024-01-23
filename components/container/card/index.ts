import React from 'react'
import Technology from './technology'
import BestSeller from './best-seller'

export interface CardTechnologyProps { image: string, title: string, description: string, className?: string }
export interface CardBestSellerProps { image: string, name: string, price: number, locations: Array<string>, className?: string }

export const CardTechnology = Technology
export const CardBestSeller = BestSeller
