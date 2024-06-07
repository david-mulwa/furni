import React from 'react'
import {grid1, grid2, grid3} from '../assets'
import Section from './Section'

const imgGrid = () => {
  return (
    <Section className='mt-9 '>
    <div>
        <img src={grid1} height={300} width={400}/>
        <img src={grid2} height={300} width={400}/>
        <img src={grid3} height={300} width={400}/>
        <h2>Helllo DAvid</h2>
    </div>
    </Section>
    
  )
}

export default imgGrid