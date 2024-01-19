import Image from 'next/image'
import styled from "styled-components";

export const CardTechnologyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height:270px;
    border-radius: 8px;
    padding: 8px 12px;

    &:hover {
    }
`
export const CardTechnologyImage = styled(Image)`
    height: 64px;
    width: 64px;
` 

export const CardTechnologyTitle = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`

export const CardTechnologyDescription = styled.div`
    width: 100%;
    height: 140px;

    p {
        text-align: center;
        font-size: 14px;
        margin-bottom: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`