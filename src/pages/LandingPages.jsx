
import Layout from '../components/layout/Layout.jsx'
import CarouselEffect from '../components/Courosel/img/CarouselEffect.jsx'
import Category from '../components/category/Category.jsx'
import Product from '../components/single/Product.jsx'

function LandingPages() {
  return (
    <Layout>
        <CarouselEffect />
        <Category />
        <Product />
    </Layout>
  )
}

export default LandingPages
