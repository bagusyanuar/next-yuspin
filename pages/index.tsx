import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/navbar'
import { Carousel, IconButton } from '@material-tailwind/react'
import Section, { SectionTechnology, SectionBestSeller } from '@/components/container/section'
import { SectionTitle, SectionSubTitle } from '@/components/typography'
import { CardTechnology, CardBestSeller } from '@/components/container/card'
import BaseButton from '@/components/button'
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Section>
        <Carousel
          placeholder={`image`}
          className='rounded-xl items-center'
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="sm"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full bg-pink-200 hover:bg-primary"
              placeholder={undefined}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="sm"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full bg-pink-200 hover:bg-primary"
              placeholder={undefined}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
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
            className='w-full max-h-[500px] object-contain' />
          <Image
            src='/assets/sliders/slider-yuspin-2.jpeg'
            alt='image-1'
            width={1200}
            height={600}
            className='w-full max-h-[500px] object-contain' />
        </Carousel>
      </Section>
      <Section>
        <SectionTitle
          text='DILENGKAPI DENGAN TEKNOLOGI ANTI BAKTERI SILVER +'
        />
        <SectionTechnology>
          <CardTechnology
            image='/assets/technologies/award.png'
            title='SNI'
            description='Yuspin bukan obat dan bukan makanan maka tidak memerlukan BPOM/depkes  Yuspin telah teruji laboratorium bebas klorin sesuai uji SNI.'
          />
          <CardTechnology
            image='/assets/technologies/microscope.png'
            title='Labolatorium Tested'
            description='Yuspin telah melalui uji klinis laboratorium sesuai uji SNI'
          />
          <CardTechnology
            image='/assets/technologies/flask.png'
            title='Bebas Klorin'
            description='Bahan baku Yuspin telah teruji laboratorium bebas klorin sesuai uji SNI.'
          />
          <CardTechnology
            image='/assets/technologies/sanitary-pad.png'
            title='Anti Bacterial Silver +'
            description='Yuspin dirancang dengan anti bacterial silver +, technology Silver+ ini sudah teruji secara Internasional diuji secara klinis di Jerman'
          />
        </SectionTechnology>
      </Section>
      <Section>
        <SectionTitle
          text='BEST SELLER'
          className='!mb-0'
        />
        <SectionSubTitle
          text='Dapatkan Produk - Produk Best Seller Kami'
        />
        <SectionBestSeller className='w-100 mb-5'>
          <CardBestSeller image='/assets/sample/product-1.png' price={7500} name='Yuspin Sabun Cuci' locations={['Jakarta', 'Bandung']}>
          </CardBestSeller>
          <CardBestSeller image='/assets/sample/product-2.png' price={125000} name='Yuspin Pembalut Kain Reguler' locations={['Medan', 'Aceh']}>
          </CardBestSeller>
          <CardBestSeller image='/assets/sample/product-3.png' price={50000} name='Yuspin Pembalut Kain Premium' locations={['Surabaya', 'Surakarta']}>
          </CardBestSeller>
          <CardBestSeller image='/assets/sample/product-4.png' price={4000} name='Yuspin Cloudi Lansia' locations={['Pekalongan']}>
          </CardBestSeller>
        </SectionBestSeller>
        <div className='w-full flex justify-center'>
          <BaseButton className='inline-block' onClick={() => { }}>
            Lihat Produk Lainnya
          </BaseButton>
        </div>
      </Section>
      <Section>
        <SectionTitle
          text='REVIEW'
          className='!mb-0'
        />
        <SectionSubTitle
          text='Kata Yuspiners yang telah menggunakan produk Yuspin'
        />
        <div className='h-48 w-full flex items-center content-center'>
          <SectionSubTitle
            text='NO CONTENT'
          />
        </div>
      </Section>
      <Section>
        <div className='w-full flex flex-wrap items-center content-center px-12 py-8'>
          <Image
            src='/assets/partners/i-news.png'
            alt='image-partner'
            width={68}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/md.png'
            alt='image-partner'
            width={40}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/tribun-news.png'
            alt='image-partner'
            width={84}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/sindo-news.png'
            alt='image-partner'
            width={156}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/interupsi.png'
            alt='image-partner'
            width={120}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/akurat.png'
            alt='image-partner'
            width={100}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/telusur.png'
            alt='image-partner'
            width={70}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/klik.png'
            alt='image-partner'
            width={20}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/indopos.png'
            alt='image-partner'
            width={122}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/rumah-gagasan.png'
            alt='image-partner'
            width={79}
            height={20}
            className='me-5'
          />
          <Image
            src='/assets/partners/edu-news.png'
            alt='image-partner'
            width={119}
            height={20}
          />
        </div>
      </Section>
      <Footer />
    </main>
  )
}
