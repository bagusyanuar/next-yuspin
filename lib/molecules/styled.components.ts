import styled from "styled-components";
import Link, { NavMenuLink } from '@/lib/atoms/link'
import Text, { HeadingText } from '@/lib/atoms/text'
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

export const FooterTagLineText = styled(HeadingText)`
    font-weight: 600;
    margin-bottom: 3rem;
`

export const FooterDivider = styled.hr`
    border-bottom: 2px solid white;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

export const FooterInformationColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const FooterInformationTitle = styled(Text)`
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 1.75rem;
`

export const FooterInformationLink = styled(Link)`
    margin-bottom: 1rem;
`

export const FooterInformatioLocationWrapper = styled.div`
    display: flex;
    align-items: start;
    margin-bottom: 1rem;
`

export const FooterInformatioLocationIcon = styled.i`
    line-height: 1.5;
    margin-right: 0.5rem;
`

export const FooterInformatioSocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const FooterInformatioSocialMediaIcon = styled.a`
    cursor: pointer;
    text-decoration: none;
    margin-right: 0.75rem;
    font-size: 1.25em;
`

export const TechnologyWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media ${device.laptop} {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`