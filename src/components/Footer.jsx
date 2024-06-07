import Section from './Section'
import {sofa,} from '../assets'
import {CgMail } from 'react-icons/cg'
import {FiSend} from 'react-icons/fi'
import Button from './Button'
import {useState} from 'react'
import {socials, navigation, company, chair ,know} from '../constants'

const Footer = () => {

  const  [form, setform] = useState({name:'', email:''})

  const handleChange=(e)=>{
        setform({...form, [e.target.name]:e.target.value})
    }


  return (
    <Section className='bg-white container'>
      <div>
        <form action="Get">
          <div className='flex flex-wrap justify-between'  dir='rtl'>
            <div className='relative top-[-7rem]'>
              <img src={sofa} alt='sofa' />
            </div>
            <div className='flex flex-col top-[18rem] items-start' dir='ltr'>
              <div className='flex justify-center items-center mt-12 max-md:mt-9 max-sm:mt-3 '>
                <CgMail className='text-gray-300 w-[36px] h-[36px]'/>
                <h3 className='text-semibold text-base  text-n-1/55'>Subscribe to Newsletter</h3>
              </div>   
              <div className='flex gap-2 flex-wrap'>
                <input
                type='text'
                name='name'
                className='border p-3 rounded-md'
                placeholder='Enter your name'
                required
                value={form.name}
                onChange={handleChange}
                />
                <div className='flex gap-2 justify-center items-center '>
                    <input
                  type='email'
                  name='email'
                  className='border p-3 rounded-md'
                  placeholder='Enter your email'
                  required
                  value={form.email}
                  onChange={handleChange}
                  />
                  <Button className='border p-5 bg-n-1 rounded-md' onClick='#' href='/'>
                    <FiSend className='text-white hover:text-n-2'/>
                  </Button>
                </div>
              </div>    
            </div>
          </div>
        </form>
      </div>
      
      
    </Section>
  )
}

export default Footer