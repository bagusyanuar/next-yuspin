import { Layout } from '@/templates/layouts'

import { SlickWrapper, SlickItem, SlickNextArrow, SlickPrevArrow } from '@/lib/atoms/slick'

function Home() {
    const slidersSetting = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />
    }
    return (
        <Layout>
            <SlickWrapper settings={slidersSetting} >
                <SlickItem className='bg-blue-gray-600'/>
                <SlickItem className='bg-red-600'/>
                <SlickItem className='bg-purple-600'/>
            </SlickWrapper>
        </Layout>
    )
}

export default Home