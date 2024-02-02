import React from 'react'
import { SectionTitle, SectionSubTitle } from '@/lib/atoms/typography'
import { CardProduct } from '@/lib/atoms/card'

const BestSeller = ({ className = '' }: IProps) => {
    
    return (
        <div className={className}>
            <SectionTitle text='BEST SELLER' />
            <SectionSubTitle text='Dapatkan produk - produk terbaik kami' className='mb-10' />
            <CardProduct
                data={{ 
                    name: 'Pembalut Original',
                    image: '/assets/sample/product-1.png',
                    price: 125000,
                    agents: ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Palembang'],
                    rate: 4,
                    sold: 10
                 }}
             />
            <CardProduct
                data={{ 
                    name: 'Paket Pembalut Super',
                    image: '/assets/sample/product-2.png',
                    price: 250000,
                    agents: ['Jakarta', 'Bandung'],
                    rate: 4.5,
                    sold: 115
                 }}
             />
        </div>
    )
}

export default BestSeller

interface IProps { className?: string }