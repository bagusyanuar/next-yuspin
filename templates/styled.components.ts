import styled from "styled-components";
import { device } from '@/lib/media'

export const StyledContentWrapper = styled.div`
    padding: 0.5rem 1rem;
    min-height: 530px;
    
    @media ${device.tablet} {
        padding: 0.5rem 5rem;
    }
`