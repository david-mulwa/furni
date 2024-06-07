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
      <div className='mt-7 flex flex-wrap  justify-between items-center '>
        <div className='flex flex-col gap-3 max-w-[45%]'>
          <h2 className='text-n-1'>Furni.</h2>
          <p className='text-balance '>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
          <div className='flex gap-3'>
            {socials.map((item)=>(
              <a key={item.id} href={item.url} target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-n-2'>
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} className='text-white'/>
                </a>
            ))}
          </div>
        </div>

        <div className='grid gap-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-2'>
          <div>
            {navigation.map((item)=>(
              <ul key ={item.id}
              className='text-gray-400 hover:text-black'
              >
                <li><a href={item.url}>{item.title}</a></li>
              </ul>
              
            ))}
          </div>
          <div>
            {know.map((item)=>(
              <ul key ={item.id}
              className='text-gray-400 hover:text-black'
              >
                <li><a href={item.url}>{item.title}</a></li>
              </ul>
              
            ))}
          </div>
          <div>
            {company.map((item)=>(
              <ul key ={item.id}
              className='text-gray-400 hover:text-black'
              >
                <li><a href={item.url}>{item.title}</a></li>
              </ul>
              
            ))}
          </div>
          <div>
            {chair.map((item)=>(
              <ul key ={item.id}
              className='text-gray-400 hover:text-black'
              >
                <li><a href={item.url}>{item.title}</a></li>
              </ul>
              
            ))}
          </div>

        </div>

      </div>
      <div className='border-t w-full flex justify-between mt-12 '>
         <div className='mt-4'>
            <p>Copyright © {new Date().getFullYear()}.  All rights reserved</p>
            <p>Designed by David Mulwa</p>
          </div>

          <div className='flex justify-between gap-4  mt-4 '>
          <a className='text-n-1/60  hover:text-black' href='#'>Terms $ Conditions</a>  
          <a className='text-n-1/60  hover:text-black' href='#'>Privacy Policy</a>
          </div>   

       </div>
      
      
    </Section>
  )
}

export default Footer