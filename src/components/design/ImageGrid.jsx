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
            <img src={grid1} className='absolute rounded-md   ' width={600} height={600}/>
            <img src={grid2} height={500} width={290} className='relative left-[11rem] max-md:left-[10rem] top-[13rem] max-md:top-[14rem] rounded-md '/>
          </div>
            
            
            <img src={grid3} height={130} width={130} className=' static left-4  max-md:right-8 rounded-md'/>           
        </div>
        

      </div>
    </Section>
    
  )
}

export default ImageGrid