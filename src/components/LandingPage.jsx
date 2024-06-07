import React from 'react'
import Section from './Section'
import {couch} from '../assets'
import Button from './Button'

const LandingPage = ({children}) => {
  return (
    <Section className='w-full h-auto bg-n-1 relative top-[3rem] '>

      <div className=' container flex w-full h-full flex-grow max-md:flex-wrap '>

        <div className='mt-12 flex flex-col flex-wrap '>
          <h1>{children}</h1>
          <p className='mt-4 md:mt-6 text-balance'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <div className='flex mt-5 gap-5  '>
            <Button className=' rounded-full p-5 text-black bg-n-2 hover:bg-n-2/75   '>Shop Now</Button>
            <Button className='rounded-full text-white border border-gray-500 hover:border-white p-5 '>Explore</Button>
          </div>

          
        </div>

        <div>
          <img src={couch} alt="couch" className='static  '/>
       </div>
      </div>
      
    </Section>
  )
}

export default LandingPage