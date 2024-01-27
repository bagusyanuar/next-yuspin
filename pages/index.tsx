import Image from 'next/image'
import { Inter } from 'next/font/google'
import Text from '@/components/atoms/text'
import Button, { ButtonIcon, ButtonCircle } from '@/components/atoms/button'
import Link, { NavMenuLink, NavActionLink } from '@/components/atoms/link'
import NavbarAction from '@/components/molecules/navbar/action'
import NavbarLink from '@/components/molecules/navbar/link'
import Navbar from '@/components/navigation/navbar'
import { Carousel, IconButton } from '@material-tailwind/react'
import Section, { SectionTechnology, SectionBestSeller } from '@/components/container/section'
import { SectionTitle, SectionSubTitle } from '@/components/typography'
import { CardTechnology, CardBestSeller } from '@/components/container/card'
import BaseButton from '@/components/button'
import Hero from '@/components/hero'
import Footer, { FooterTagLine, FooterDescription } from '@/components/navigation/footer'
import FooterInformation, { FooterInformationColumn, FooterInformationTitle } from '@/components/navigation/footer/information'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='w-full px-10 py-10'>
        <p className='mb-3 font-bold'>ATOMS</p>
        <div className='rounded-md block border-black border py-2 px-3 mb-3 w-'>
          <p className='font-bold'>TEXT</p>
          <Text text='coba' size='small' className='' />
        </div>

        <div className='rounded-md block border-black border py-2 px-3 mb-3'>
          <p className='font-bold'>Button</p>
          <Button theme='accent-outlined' size='small' className='mb-3'>ABC</Button>
          <ButtonIcon theme='primary-outlined' size='small' icon='bx-cart' addon='prepend' className='mb-3'>Submit</ButtonIcon>
          <ButtonIcon theme='primary-outlined' size='small' icon='bx-cart' addon='append' className='mb-3'>Submit</ButtonIcon>
          <ButtonCircle theme='accent-outlined' size='medium' className='mb-3'>ABC</ButtonCircle>
        </div>

        <div className='rounded-md block border-black border py-2 px-3 mb-5'>
          <p className='font-bold'>Link</p>
          <Link to='#' text='Basic' color='#F36486' className='me-3' />
          <NavMenuLink to='#' text='Navbar Menu' color='#F36486' className='me-3' />
          <NavActionLink to='#' icon='bx-cart' />
        </div>

        <p className='mb-3 font-bold'>MOLECULES</p>
        <div className='rounded-md block border-black border py-2 px-3 mb-3 w-'>
          <p className='font-bold'>NAVBAR ACTION</p>
          <NavbarAction items={[
            { icon: 'bx-cart', to: '#', showBadge: true, badgeValue: 10 },
            { icon: 'bx-user', to: '#', showBadge: true }
          ]} />
          <NavbarLink items={[
            { text: 'HOME', to: '#' },
            { text: 'PRODUCT', to: '#' },
            { text: 'CONTACT', to: '#' }
          ]} />
        </div>
        {/* <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div> */}

      </div>
    </main>
  )
}
