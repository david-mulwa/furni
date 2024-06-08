import React from 'react'
import {grid1, grid2, grid3} from '../../assets'
import Section from '../Section'

const ImageGrid = () => {
  return (
    <Section className='mt-9 container mb-32 '>
      <div className=''>
        <div className='relative grid grid-cols-3 '>
          <div className='relative h-auto flex-grow-1 
          '>
            <img src={grid1} height={800} width={400} className='absolute rounded-md '/>
            <img src={grid2} height={500} width={290} className='relative left-[19rem] top-[16rem] rounded-md '/>
          </div>
            
            
            <img src={grid3} height={200} width={170} className=' static right-5 rounded-md'/>           
        </div>
        

      </div>
    </Section>
    
  )
}

export default ImageGrid