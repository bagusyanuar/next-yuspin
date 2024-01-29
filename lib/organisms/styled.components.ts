import styled from "styled-components";
import { device } from '../media'

export const StyledNavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
    
    @media ${device.tabletS} {
        padding: 0.75rem 1rem;
    }

    @media ${device.tabletL} {
        padding: 1rem 5rem;
    }
`

export const StyledFooterWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem;
    background-color: var(--primary-color);
    color: white;

    @media ${device.tabletL} {
        padding: 4rem 8rem;
    }
`
export const FooterInformationWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`