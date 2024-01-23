import React from 'react'
import styled from 'styled-components'

function Wrapper() {
    return (
        <FooterWrapper className='bg-primary'>
        </FooterWrapper>
    )
}

export default Wrapper

const FooterWrapper = styled.div`
    padding: 2rem 5rem;
    width: 100%;
`