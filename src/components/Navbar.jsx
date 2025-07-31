import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }
  return (
    <div className='absolute top-0 left-0 w-full z-20'>
        <div className='flex justify-between items-center w-full mx-auto px-6 py-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" className='w-15 h-15 object-contain rounded-full' />
            <ul className='hidden md:flex gap-7 text-white'>
                <li><a href="#Header" className='hover:text-gray-400 cursor-pointer'>Home</a></li>
                <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
                <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
                <li><a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
                
            </ul>
            <button className='hidden md:block bg-white text-black px-8 py-2 rounded-full cursor-pointer'>Sign In</button>
            <img src={assets.menu_icon} alt="" className='w-7 h-7 object-contain cursor-pointer md:hidden' onClick={handleMobileMenu} />
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}>
          <div className='flex justify-end items-center px-5 py-5 cursor-pointer'>
            <img onClick={handleMobileMenu} src={assets.cross_icon} alt="" className='w-5 h-5 object-contain' />
          </div>
          <ul className='flex flex-col gap-2 items-center text-lg font-medium text-black'>
            <a href="#Home" className='px-4 py-2 inline-block rounded-full'>Home</a>
            <a href="#About" className='px-4 py-2 inline-block rounded-full'>About</a>
            <a href="#Projects" className='px-4 py-2 inline-block rounded-full'>Projects</a>
            <a href="#Testimonials" className='px-4 py-2 inline-block rounded-full'>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar