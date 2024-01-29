import styled from "styled-components";
import { NavMenuLink } from '@/lib/atoms/link'
import { device } from '../media'

export const StyledNavbarLinkWrapper = styled.div`
    display: none;
    align-items: center;
    gap: 0.25rem;

    @media ${device.tablet} {
        display: flex;
    }
`

export const StyledNavbarMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`

export const StyledSidebarTrigger = styled(NavMenuLink)`
    @media ${device.tablet} {
        display: none;
    }
`

export const StyledFooterDescriptionWrapper = styled.div`
    width: 100%;
`