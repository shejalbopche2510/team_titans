import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white px-6 py-4 flex items-center justify-between'>
      
        <h1 className='text-xl font-bold'>Smart Campus</h1>
        <div className='flex gap-6'>
            <a href='/'
            className='hover:text-blue-200'>Home</a>
            
            <a href='/register-complaint'
            className='hover:text-blue-200'>Register Complaint</a>
           
            <a href='/my-complaints'
            className='hover:text-blue-200'>My Complaints</a>
            
            <a href='/about'
            className='hover:text-blue-200'>About</a>
        </div>
    </nav>
  )
}

export default Navbar
