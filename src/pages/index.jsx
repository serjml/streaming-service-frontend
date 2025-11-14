import { Head } from "minista"
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Content from '@/layouts/Content'

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Stream Vibe | Home</title>
      </Head>
      <Header />
      <Content>
        Lorem
      </Content>
      <Footer />
    </>
  )
}
