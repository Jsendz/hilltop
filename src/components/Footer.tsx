import React from 'react'
import { ContactForm } from './Form/form'

const Footer = () => {
  return (
    <div className='w-full h-full z-50 absolute bg-slate-800'>
      <div className='w-[90%] lg:w-1/3 mx-auto h-full p-5  bg-slate-200 rounded-lg '>
        <ContactForm />
      </div>
      
    </div>
  )
}

export default Footer