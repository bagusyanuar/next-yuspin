import styled from "styled-components";
import { device } from '@/components/media'


export const StyledNavbarwrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    
    @media ${device.tabletS} {
        padding: 0.75rem 2.5rem;
    }

    @media ${device.tabletL} {
        padding: 1rem 5rem;
    }
`