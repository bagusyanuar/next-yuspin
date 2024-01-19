import styled from "styled-components";
import { device } from '@/components/media'

export const ContainerWrapper = styled.section`
    padding: 0.25rem 0.5rem;

    @media ${device.tablet} {
        padding: 1rem 2rem;
    }

`