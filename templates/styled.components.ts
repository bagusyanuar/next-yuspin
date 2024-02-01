import styled from "styled-components";
import { device } from '@/lib/media'

export const StyledContentWrapper = styled.div`
    padding: 0.5rem 1rem;
    min-height: 530px;
    
    @media ${device.tabletL} {
        padding: 1rem 5rem;
    }
`