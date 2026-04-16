import MyPicture from '../assets/img/mypicture.png'
import React from 'react'

const Figure = () => {
  return (
    <div className='relative mt-12 lg:mt-0 flex justify-center items-center w-full lg:w-auto'>
        <figure className='z-10 w-56 md:w-80 lg:w-104'>
            <img src={MyPicture} alt="My Picture" className='w-full h-auto object-cover' />
        </figure>

        <div className='bg-amber-600 w-72 h-72 md:w-96 md:h-96 lg:w-120 lg:h-120 rounded-full absolute -right-10 lg:-right-32 -bottom-20 lg:-bottom-32 -z-10 opacity-50 lg:opacity-100 '></div>
    </div>
  )
}

export default Figure
