import React, {useState} from 'react'
import Section from '../components/Section'
import {MdEmail} from 'react-icons/md'
import {FaLocationArrow,FaPhoneAlt} from 'react-icons/fa'
import Button from '../components/Button'
import LandingPage from'../components/LandingPage'

const Contact = () => {
  const [form, setForm]=useState({firstName:'', lastName:'', email:'', message:''})

  const handleChange=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }



  return (


    <>
    <LandingPage>Contact Us</LandingPage>
    <Section className='mt-12 top-[3rem] mb-12 container'>


      <form className='flex flex-col items-center justify-center w-full h-auto'>
        <div className='flex justify-between flex-nowrap gap-11 items-center mb-12 '>
          <div className='flex gap-3 items-center justify-center'>
            <div className='border p-3 bg-n-1 rounded-lg' >
              <FaLocationArrow className='text-white'/>
            </div>
            
            <p>Nairobi Kenya</p>
          </div>
          
          <div className='flex gap-3 items-center justify-center'>
            <div className='border p-3 bg-n-1 rounded-lg' >
              <MdEmail  className='text-white '/>
            </div>
            
            <p>mulwakitonga2000@gmail.com</p>
          </div>

          <div className='flex gap-3 items-center justify-center '>
            <div className='border p-3 bg-n-1 rounded-lg' >
              <FaPhoneAlt className='text-white '/>
            </div>
            
            <p>+254745722179 </p>
          </div>

        </div>
        <div className='flex flex-col space-y-8 '>
            <div className='flex gap-7  w-full justify-between flex-wrap  items-center'>
              <input
              type='text'
              name='firstName'
              className='p-3 border rounded-md '
              required
              value={form.firstName}
              placeholder='Enter Your FirstName'
              onChange={handleChange}
              />
              <input
              type='text'
              name='lastName'
              className='p-3 border rounded-md'
              required
              value={form.lastName}
              placeholder='Enter Your lastName'
              onChange={handleChange}
              />
          </div>
          <input
            type='email'
            name='email'
            className='p-3 border rounded-md'
            required
            value={form.email}
            placeholder='Enter Your email'
            onChange={handleChange}
            />
            <textarea 
              type='message'
              name='message'
              className='p-3 border rounded-md'
              required
              value={form.message}
              onChange={handleChange}
              
          />
        </div>
        <Button className='mt-5 rounded-full border p-3 bg-gray-950 text-white items-start justify-start' onClick='#' href='/Contact'>Send Message</Button>
        
      </form>

    </Section>
    </>
    
  )
}

export default Contact 