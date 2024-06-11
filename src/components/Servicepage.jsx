import Section from './Section'
import {serve} from '../constants'

const Service = ({className}) => {
  return (
    <Section className='container'>
      <div className={`${className||'grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5' }`}>
        {serve.map((item) => (
          <div key={item.id} className='card py-3 max-md:py-4 max-sm:py-4 '>
            <img src={item.icon}/>
            <h3 className='text-black mt-4'>{item.title}</h3>
            <p className='mt-4'>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Service 