import styled from "styled-components";
import { device } from '../media'
import Slider from 'react-slick'
import {
    IStyledTextProps,
    TextSize,
    IStyledSidebarBackdropProps,
    IStyledSidebarToggleProps
} from './props'

// atomic text style
export const StyledText = styled.p<IStyledTextProps>`
    font-size: ${({ $size }) => TextSize[$size]};
`

//atomic link style
export const StyledLink = styled.a<{ $color?: string }>`
    text-decoration: none;
    color: ${({ $color }) => $color ? $color : 'var(--primary-color)'};
    transition: color 0.2s ease-in;

    &:hover {
        color: color-mix(in srgb, ${({ $color }) => $color ? $color : 'var(--primary-color)'} 90%, black);
    }
`

export const StyledNavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: var(--text-dark);
    background-color: white;
    font-weight: 700;
    font-size: 0.75rem;
    transition: all 0.2s ease-in;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;

    &:hover {
        color: white;
        background-color: var(--primary-color);
    }
`
export const StyledNavMenuLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: var(--text-dark);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(220, 220, 220, 0.3)
    }
`

export const StyledSidebarBackdrop = styled.div<IStyledSidebarBackdropProps>`
    display: ${({ $show }) => $show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`

export const StyledSidebarToggleWrapper = styled.div<IStyledSidebarToggleProps>`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 1rem 0.5rem;
    transform: ${({ $show }) => $show ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;
`
export const SlickWrapper = styled(Slider) <{ $height: number }>`
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 4 / 2;
    /* height: ${({ $height }) => $height}px; */

    .slick-track {
        /* height: ${({ $height }) => $height}px; */

        .slick-slide {
            /* height: ${({ $height }) => $height}px !important; */

            div {
                /* height: ${({ $height }) => $height}px !important; */
            }
        }
    }
    
`

export const SlickItemWrapper = styled.div`
    width: 100%;
    aspect-ratio: 4 / 2;
    border-radius: 10px;
    /* height: 50px; */
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }
`

export const SlictNextArrow = styled.div`
    position: absolute;
    display: flex !important;
    align-items: center;
    justify-content: center;
    top: 50%;
    right: 15px;
    z-index: 2;
    width: 30px;
    height: 30px;
    transform: translate(0, -50%);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.8;
    font-size: 1em;
    &::before {
        content: '';
    }

    &:hover {
        background-color: var(--primary-color);
        color: white;
        opacity: 1;
    }
`

export const SlickPrevArrow = styled.div`
    position: absolute;
    display: flex !important;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 15px;
    z-index: 2;
    width: 30px;
    height: 30px;
    transform: translate(0, -50%);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.8;
    font-size: 1em;
    &::before {
        content: '';
    }

    &:hover {
        background-color: var(--primary-color);
        color: white;
        opacity: 1;
    }
`

export const CardTechnologyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 1rem 1.5rem;

    img {
        margin-bottom: 1.5rem;
        width: 45px;
        height: 45px;

        @media ${device.tablet} {
            width: 65px;
            height: 65px;
        }
    }

    .title {
        font-weight: 600;
        font-size: 0.8em;
        margin-bottom: 1rem;
        color: var(--text-dark);

        @media ${device.tablet} {
            font-size: 1em;
        }
    }

    .description {
        font-size: 0.7em;
        text-align: center;
        color: var(--text-dark-light);

        @media ${device.tablet} {
            font-size: 0.8em;
        }
    }
`