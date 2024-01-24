import React from 'react'
import { FooterInformationWrapperProps } from './index'
import styled from 'styled-components'

function Wrapper({
  children,
  className = ''
}: FooterInformationWrapperProps) {
  return (
    <FooterInformationWrapper className={className}>{children}</FooterInformationWrapper>
  )
}

export default Wrapper

const FooterInformationWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
`