import React from 'react'
import Servicepage from './Servicepage'
import {why} from '../assets'
import Section from './Section'

const whyus = () => {
  return (
    <Section className='container'>
        <div className='flex '>
            <div>
                <h3>Why Choose Us</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <Servicepage className='grid grid-cols-2 '/>

            </div>
            <div className='h-auto '>
                <img src={why}  width={600} className='max-md:hidden max-sm:hidden'/>
            </div>
        </div>
    </Section>
  )
}

export default whyus