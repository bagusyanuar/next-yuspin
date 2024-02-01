import { Layout } from '@/templates/layouts'
import Banner from '@/lib/organisms/slider/banner'
import { Technologies } from '@/lib/molecules/technologies'

function Home() {
    return (
        <Layout>
            <Banner className='mb-10'/>
            <Technologies />
        </Layout>
    )
}

export default Home