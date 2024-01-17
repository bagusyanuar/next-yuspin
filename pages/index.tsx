import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/navbar'
import { Carousel } from '@material-tailwind/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Carousel placeholder={`image`}>
        <Image src='/assets/sliders/slider-yuspin.png' alt='image-1' width={1200}  height={600}/>
      </Carousel> */}
    </main>
  )
}
