import React from 'react'
import Section from './Section'
import {testimonial} from '../constants'

const Testimonial = () => {
  return (
    <Section className='container mb-[45px]'>
        <div>
            <h2 className='text-center'>Testimonials</h2>
        </div>

        <div className='overflow-hidden mt-6  '>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {testimonial.map((item)=>(
                    <div key={item.id} className='w-full card h-full  '>
                        <p>{item.testimony}</p>
                        <img src={item.image} className='rounded-full mt-4' width={50} height={50}/>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                ))}
            </div>
        </div>
        

    </Section>
  )
}

export default Testimonial