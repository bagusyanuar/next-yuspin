import React from 'react'

import { CardTechnology } from '@/lib/atoms/card'
import { TechnologyWrapper } from '../styled.components'

const Technologies = () => {
    return (
        <TechnologyWrapper>
            <CardTechnology
                icon='/assets/technologies/award.png'
                className='w-full'
                title='SNI'
                description='Yuspin bukan obat dan bukan makanan maka tidak memerlukan BPOM/depkes  Yuspin telah teruji laboratorium bebas klorin sesuai uji SNI.'
            />
            <CardTechnology
                icon='/assets/technologies/microscope.png'
                className='w-full'
                title='Laboratiorium Tested'
                description='Yuspin telah melalui uji klinis laboratorium sesuai uji SNI'
            />
            <CardTechnology
                icon='/assets/technologies/flask.png'
                className='w-full'
                title='Bebas Klorin'
                description='Bahan baku Yuspin telah teruji laboratorium bebas klorin sesuai uji SNI.'
            />
            <CardTechnology
                icon='/assets/technologies/sanitary-pad.png'
                className='w-full'
                title='Anti Bacterial +'
                description='Yuspin dirancang dengan anti bacterial silver +, technology Silver+ ini sudah teruji secara Internasional diuji secara klinis di Jerman'
            />
        </TechnologyWrapper>
    )
}

export default Technologies