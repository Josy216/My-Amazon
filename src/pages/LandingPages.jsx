import React from 'react'
import Layout from '../components/layout/Layout'
import CarouselEffect from '../components/Courosel/img/CarouselEffect'
import Category from '../components/category/Category'
import Product from '../components/single/product'

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
