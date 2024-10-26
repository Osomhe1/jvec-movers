// src/components/Navbar.jsx
import { useState } from 'react'
import { MenuIcon, XIcon, PhoneIcon } from '@heroicons/react/outline' // Use Heroicons or any other icon library.
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='bg-[#282B2E] text-white py4 px-6 '>
      <div className='container mx-auto py-4 md:py-0 flex justify-between items-center'>
        {/* Logo */}
        <div className=''>
          <Logo />
        </div>

        {/* Large and Tablet Screen Menu */}
        <nav className='hidden md:flex space-x-8   items-center'>
          <a
            href='#'
            className='hover:text-white py-4 text-[#9C9D9F]  relative group'
          >
            Home
            <div className='absolute h-[2px] w-full bg-transparent bottom-0 left-0 transform group-hover:bg-priRed  transition duration-300'></div>
          </a>
          <a
            href='#'
            className='hover:text-white  py-4 text-[#9C9D9F] relative group'
          >
            About
            <div className='absolute h-[2px] w-full bg-transparent bottom-0 left-0 transform group-hover:bg-priRed  transition duration-300'></div>
          </a>
          <a href='#' className='text-white  py-4 relative group'>
            Services
            <div className='absolute h-[2px] w-full bg-priRed  bottom-0 left-0'></div>
          </a>
          <a
            href='#'
            className='hover:text-white  py-4 text-[#9C9D9F] relative group'
          >
            More
            <div className='absolute h-[2px] w-full bg-transparent bottom-0 left-0 transform group-hover:bg-priRed  transition duration-300'></div>
          </a>
          <a
            href='#'
            className='hover:text-white  py-4 text-[#9C9D9F] relative group'
          >
            Contact
            <div className='absolute h-[2px] w-full bg-transparent bottom-0 left-0 transform group-hover:bg-priRed  transition duration-300'></div>
          </a>
        </nav>

        {/* Contact and Button (Shown on large and tablet screens) */}
        <div className=' md:flex items-center space-x-6'>
          <div className='hidden md:flex items-center space-x-2'>
            <PhoneIcon className='h-5 w-5' />
            <span className='underline'>0814-097-0954</span>
          </div>
          <a
            href='#'
            className='bg-priRed hover:bg-red-600 text-white py-2 px-6 rounded transition'
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className='h-8 w-8' />
            ) : (
              <MenuIcon className='h-8 w-8' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden bg-bgColor px-6 py-4 space-y-4'>
          <a href='#' className='block  hover:text-gray-400 text-[#9C9D9F]'>
            Home
          </a>
          <a href='#' className='block  hover:text-gray-400 text-[#9C9D9F]'>
            About
          </a>
          <a href='#' className='block  hover:text-gray-400 text-[#9C9D9F]'>
            Services
          </a>
          <a href='#' className='block  hover:text-gray-400 text-[#9C9D9F]'>
            More
          </a>
          <a href='#' className='block  hover:text-gray-400 text-[#9C9D9F]'>
            Contact
          </a>
          <div className='flex items-center space-x-2 mt-4'>
            <PhoneIcon className='h-5 w-5' />
            <span>0814-097-0954</span>
          </div>
          <a
            href='#'
            className='bg-priRed hover:bg-red-600 text-white py-2 px-6 rounded mt-4 block text-center transition'
          >
            Free Quote
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
