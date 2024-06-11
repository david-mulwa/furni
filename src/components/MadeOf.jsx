import React from 'react'
import Section from './Section'
import ImageGrid from './design/ImageGrid'
import Button from './Button'

const MadeOf = () => {
  return (
    <Section >
        <div className='mb-7 flex justify-between items-center'>
            <div className='w-full h-full mb-8 max-sm:hidden'>
                <ImageGrid />
            </div>
            <div className='flex flex-col gap-5 justify-center items-center w-[70%] container '>
                <h2>We Help You Make Modern Interior Design</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

                <ol className='grid grid-cols-2 list-disc gap-4'>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ol>
                <Button className='rounded-full p-3 bg-gray-950 text-white'>Explore</Button>
            </div>

        </div>
        

    </Section>
  )
}

export default MadeOf