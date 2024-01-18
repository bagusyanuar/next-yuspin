import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/navbar'
import { Carousel, IconButton } from '@material-tailwind/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className='px-8'>
        <Carousel
          placeholder={`image`}
          className='rounded-xl h-[550px]'
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="red"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
              placeholder={undefined}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
        >
          <Image
            src='/assets/sliders/slider-yuspin.png'
            alt='image-1'
            width={1200}
            height={600}
            className='w-full h-full object-contain' />
          <Image
            src='/assets/sliders/slider-yuspin.png'
            alt='image-1'
            width={1200}
            height={600}
            className='w-full h-full object-contain' />
        </Carousel>
      </section>

    </main>
  )
}
