import React from 'react'
import { SlickItemWrapper } from '../styled.components'

const Item = ({ className }: IProps) => {
    return (
        <SlickItemWrapper $height={400} className={className}>

        </SlickItemWrapper>
    )
}

export default Item

interface IProps { className?: string }