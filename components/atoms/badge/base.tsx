import React from 'react'
import { IProps } from './type'
import { Badge } from './style'

function Base({
    value
}: IProps) {
    return (
        <Badge>{value}</Badge>
    )
}

export default Base