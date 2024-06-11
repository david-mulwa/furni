import React from 'react'
import Button from '../components/Button'
import LandingPage from '../components/LandingPage';
import Whyus from '../components/whyus' ;
import Testimonial from '../components/Testimonial'
import Product from '../components/Product'
import MadeOf from '../components/MadeOf'
import ProdDetails from '../components/ProdDetails'

const Home = () => {
  return (
    <>
      <LandingPage>Modern Interior Design Studio</LandingPage>

      <div className=' flex w-full container items-center justify-center max-md:flex-wrap max-sm:flex-wrap '>
        <div className='flex flex-col w-full  gap-4 lg:w-[30%] xl:w-[30%] '>
          <h2>Crafted with excellent material.</h2>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Button className='rounded-full p-3 border bg-gray-950 text-white w-[40%] '>Explore</Button>
        </div>
        <div>
          <Product />
        </div>
      </div>

      <Whyus />
      <MadeOf/>
      <ProdDetails/>
      <Testimonial />
     

      
      


      
    </>
  )
}

export default Home