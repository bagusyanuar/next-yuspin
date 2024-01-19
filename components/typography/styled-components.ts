import styled from "styled-components";
import { device } from '@/components/media'

export const SectionTitleWrapper = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 0.875rem;

    @media ${device.laptop} {
        font-size: 24px;
    }
`