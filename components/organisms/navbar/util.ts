import { TItem as TItemLink } from '@/components/molecules/navbar/link/type'
import { TItem as TItemAction } from '@/components/molecules/navbar/action/type'

export const LinkItems: Array<TItemLink> = [
    {
        text: 'PRODUK',
        to: '/produk'
    },
    {
        text: 'KOMUNITAS',
        to: '/komunitas'
    }
]

export const ActionItems: Array<TItemAction> = [
    {
        icon: 'bx-cart',
        to: '/produk'
    },
    {
        icon: 'bx-user',
        to: '/komunitas'
    }
]