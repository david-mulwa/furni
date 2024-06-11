import React from 'react'
import LandingPage from '../components/LandingPage';
import Product from '../components/Product'

const Shop = () => {
  return (
    < >
      <LandingPage>Shop</LandingPage>
      <Product/>
      <Product className='sm:hidden mb-12'/>
    </>
  )
}

export default Shop