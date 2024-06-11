import React from 'react'
import Section from './Section'
import { products } from '../constants'

const ProdDetails = () => {
  return (
    <Section className='container'>
        <div>
            <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
                {products.map((item)=>(
                    <div key={item.id} className='flex items-center justify-center gap-3 '>
                        <img src={item.image} width={80}  />
                        <div className='flex flex-col'>
                            <h4 className='font-bold'>{item.name}</h4>
                            <p>{item.description}</p>
                            <a href="#" className='hover:underline'>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default ProdDetails