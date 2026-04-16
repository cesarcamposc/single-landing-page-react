import React from 'react'

const Button = ({ children, className='', ...props }) => {
  return (
    <button className={`bg-red-600 text-white hover:bg-red-700 rounded-4xl ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button