import { Layout } from '@/templates/layouts'
import Banner from '@/lib/organisms/slider/banner'
import Technologies from '@/lib/organisms/technologies'
import BestSeller from '@/lib/organisms/best-seller'

function Home() {
    return (
        <Layout>
            <Banner className='mb-10'/>
            <Technologies className='mb-10'/>
            <BestSeller />
        </Layout>
    )
}

export default Home