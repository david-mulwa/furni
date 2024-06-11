import React from 'react'
import { products } from '../constants'
import {CgAdd} from 'react-icons/cg'
import Button from './Button'

const Product = () => {
  return (
    <div>
        <div className='gap-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {products.map((item)=>(
                <div key={item.id} className='card flex flex-col items-center justify-center '>
                    <div>
                        <img src={item.image}/>
                    </div>
                    <div className='card px-0 py-0 items-center justify-center flex  flex-col hover:bg-gray-300 flex-grow-2 mt-5 gap-4'>
                        <p className='mt-6'>{item.name}</p>
                        <h3>{item.price}</h3>

                        <Button className='w-full'>
                            <CgAdd  className='w-[24px] h-[24px]  text-n-1/40 rounded-full hover:text-black  '/>
                        </Button>

                        

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product