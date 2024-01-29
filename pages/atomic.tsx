import Text, { HeadingText } from '@/lib/atoms/text'
import Link, { NavLink, NavMenuLink } from '@/lib/atoms/link'
import { NavbarLinks, NavbarMenus } from '@/lib/molecules/navbar'

export default function Atomic() {
    return (
        <main className="">
            <HeadingText size='large' text='Heading Text' as='h1' />
            <Text size='small' text='Common Text' />
            <Link text='common link' to='#' />
            <NavLink text='Navbar Link' to='#' />
            <NavMenuLink icon='bx-menu' onClick={() => { console.log('clicked') }} />
            <NavbarLinks />
            <NavbarMenus />
        </main>
    )
}