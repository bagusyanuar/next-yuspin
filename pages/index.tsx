import React, { useState, useEffect } from 'react'
import { Layout } from '@/templates/layouts'

function Home() {

    let arrIndex = [1, 2, 3, 4, 5]

    const myTimer = () => {
        arrIndex.splice(0, 1)
        console.log(arrIndex);
    }
    useEffect(() => {
        // let i = setInterval(myTimer, 10000)
        // return () => { clearInterval(i) }
    }, [])


    return (
        <Layout>

        </Layout>
    )
}

export default Home