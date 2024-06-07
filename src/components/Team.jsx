import React from 'react'
import Section from './Section'
import {team} from '../constants'
const Team = () => {
  return (
    <Section className='container'>
        <div className='mt-6 '>
            <div className='flex  items-center justify-center'>
                <h3 className='text-black'>Our Team</h3>
            </div>
            <div className='grid lg:grid-cols-4 xl:grid-col-4  md:grid-col-2 sm:grid-cols-1 gap-4 mt-8   '>
                {team.map((item)=>(
                    <div key={item.id} classsName='card mt-6 '>
                        <img src={item.imgurl} className='w-auto h-auto' />
                        <div className='flex flex-col gap-4 mt-4 '>
                            <h3 className='text-black underline hover:no-underline'>{item.name}</h3>
                            <p className='font-thin text-sm'>{item.position}</p>
                            <p className='text-wrap'>{item.description}</p>
                            <a href={item.url} className='underline text-black'>Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </Section>
  )
}

export default Team