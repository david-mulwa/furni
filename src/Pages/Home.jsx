import React from 'react'
import Section from '../components/Section'
import Team from '../components/Team'
import LandingPage from '../components/LandingPage';
import Whyus from '../components/whyus' ;
import Servicepage from '../components/Servicepage'
import imgGrid from '../components/imgGrid'

const Home = () => {
  return (
    <Section>
      <LandingPage>Modern Interior Design Studio</LandingPage>

      <Team/>
      <imgGrid/>
      <Whyus/>

      <Servicepage/>

      
    </Section>
  )
}

export default Home