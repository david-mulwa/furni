import React from 'react'
import Section from '../components/Section'
import Team from '../components/Team'
import LandingPage from '../components/LandingPage';
import Whyus from '../components/whyus' ;
import Servicepage from '../components/Servicepage'
import ImageGrid from '../components/design/ImageGrid'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <LandingPage>Modern Interior Design Studio</LandingPage>

      <Team/>
      <ImageGrid/>

      <Servicepage/>

      <Testimonial />
      


      
    </>
  )
}

export default Home