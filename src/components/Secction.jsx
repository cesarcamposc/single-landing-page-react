import Button from './Button'
import React from 'react'

const Section = () => {
  return (
    <section className='p-8 lg:px-16 text-center lg:text-left flex flex-col items-center lg:items-start gap-4'>
      <h2 className='text-3xl'>Hello</h2>
      <h1 className='text-5xl'>I'm Your Name</h1>
      <h3 className='text-2xl text-red-600 mt-2'>Software Engineer Mobile</h3>
      <p className='text-gray-700 text-base md:text-lg mt-6 mb-12 w-full max-w-sm lg:max-w-none lg:w-80 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat delectus officia, iste quam tempore ratione eligendi placeat sequi asperiores facere temporibus veritatis voluptatem a debitis magnam ea sed soluta?</p>
      <Button className='px-8 py-5'>Contact Me</Button>   
    </section>
  )
}

export default Section