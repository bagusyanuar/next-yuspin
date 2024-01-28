import styled from "styled-components";
import { device } from '@/components/media'


export const StyledWrapper = styled.div`
    display: none;
    align-items: center;
    gap: 0.25rem;

    @media ${device.tablet} {
        display: flex;
    }

`