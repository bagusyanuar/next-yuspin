import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fontSize } from '@/lib/constant'

export type TProductType = {
  image: string
  name: string
  price: number
  agents: Array<string>
  rate: number,
  sold: number
}

interface IProps { data: TProductType, className?: string }

const Product = ({ data, className = '' }: IProps) => {
  return (
    <ProductWrapper className={className}>
      <ProductImage
        src={data.image}
        height={300}
        width={500}
        alt='img-product'
      />
      <ProductInformationWrapper>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>{`Rp${data.price.toLocaleString('id-ID')}`}</ProductPrice>
        <ProductLocationWrapper>
          <i className='bx bxs-map'></i>
          <ProductLocation>
            {
              data.agents.map((v, k) => {
                if (k === 0) {
                  return v
                }
                return `,${v}`
              })
            }
          </ProductLocation>
        </ProductLocationWrapper>
        <ProductRateWrapper>
          <i className='bx bxs-star'></i>
          <ProductRate>{data.rate}</ProductRate>
          <span>|</span>
          <ProductSold>{`${data.sold} terjual`}</ProductSold>
        </ProductRateWrapper>
      </ProductInformationWrapper>
    </ProductWrapper>
  )
}

export default Product

const ProductWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 200px;
    height: 320px;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`

const ProductImage = styled(Image)`
    width: 100%;
    height: 0px;
    flex: 3;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
    object-position: center center;
`

const ProductInformationWrapper = styled.div`
    flex: 2;
    width: 100%;
    height: 100%;
    padding: 0.1rem 0.5rem;
`

const ProductName = styled.p`
    margin-bottom: 0;
    font-size: ${fontSize.small};
`

const ProductPrice = styled.p`
    margin-bottom: 0.25rem;
    font-size: ${fontSize.normal};
    font-weight: 600;
    color: var(--primary-color);
`

const ProductLocationWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;

    i {
        color: rgb(76 175 80);
        margin-right: 0.25rem;
    }
`

const ProductLocation = styled.a`
    color: var(--text-dark-light);
    font-size: ${fontSize.extraSmall};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: underline;
    }
`

const ProductRateWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-dark-light);

  i {
    color: rgb(255 152 0);
    margin-right: 0.25rem;
  }

  span {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-size: 0.7em;
  }
`

const ProductRate = styled.p`
    margin-bottom: 0;
    font-size: 0.7em;
`

const ProductSold = styled.p`
    margin-bottom: 0;
    font-size: 0.7em;
`
