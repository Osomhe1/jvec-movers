// src/components/Footer.jsx
import Logo from './Logo'
import redImg from '../assets/Group17red.svg'
import { MdWhatsapp } from 'react-icons/md'
import { CiFacebook } from 'react-icons/ci'

const Footer = () => {
  return (
    <footer className='bg-[#292D32] px-16 text-white pt-12 pb-40 md:pb-72 relative'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Logo Section */}
        <div>
          <Logo />

          <p className='text-white text-[18px] '>
            Copyright © {new Date().getFullYear()} <br />
            JVEC Movers. All Rights Reserved.
          </p>
          <p className='text-[#6F7173] mt-4'>Book Now - Schedule Your Move</p>
          <button className='bg-priRed hover:bg-red-600 text-white py-2 px-6 rounded-lg mt-4'>
            Free Quote
          </button>
        </div>

        {/* Services Section */}
        <div>
          <h3 className='text-priRed text-[20px] mb-4'>SERVICES</h3>
          <ul>
            <li className='text-[#6F7173] font-semibold'>Residential Moving</li>
            <li className='text-[#FFFDFD]'>Complete Packing</li>
            <li className='text-[#FFFDFD]'>Loading and Unloading</li>
            <li className='text-[#FFFDFD]'>Transportation</li>
            <li className='text-[#FFFDFD]'>Unpacking Services</li>
            <li className='text-[#FFFDFD]'>Commercial Moving</li>
            <li className='text-[#FFFDFD]'>Office and Business Relocations</li>
            <li className='text-[#FFFDFD]'>Packing and Transportation</li>
            <li className='text-[#FFFDFD]'>Setup Services</li>
            <li className='text-[#6F7173] font-semibold mt-4'>
              Specialty Moves
            </li>
            <li className='text-[#FFFDFD]'>Delicate Items</li>
            <li className='text-[#FFFDFD]'>Heavy Furniture</li>
            <li className='text-[#6F7173] font-semibold mt-4'>
              Cleaning Services
            </li>
            <li className='text-[#FFFDFD]'>Post-Move Cleaning</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className='text-priRed text-[20px] mb-4'>QUICK LINKS</h3>
          <ul>
            <li className='text-[#FFFDFD] hover:text-white'>About Us</li>
            <li className='text-[#FFFDFD] hover:text-white'>FAQ</li>
            <li className='text-[#FFFDFD] hover:text-white'>Blog</li>
            <li className='text-[#FFFDFD] hover:text-white'>Privacy Policy</li>
            <li className='text-[#FFFDFD] hover:text-white'>
              Terms of Service
            </li>
            <li className='text-[#FFFDFD] hover:text-white'>SiteMaps</li>
          </ul>
        </div>

        {/* Contact and Social Links Section */}
        <div>
          <h3 className='text-priRed text-[20px] mb-4'>CONTACT US</h3>
          <p className='text-[#FFFDFD]'>
            12 Rev. Oguniyi Street, off Oba Akinjobi, Ikeja GRA, Lagos, Nigeria.
          </p>
          <p className='text-[#FFFDFD] mt-4'>Phone: +234-0814-097-9054</p>
          <p className='text-priRed mt-4'>
            Email:{' '}
            <a href='mailto:hello@jvecmovers.com'>hello@jvecmovers.com</a>
          </p>

          <h3 className='text-priRed text-[20px] mt-8 mb-4'>FOLLOW US</h3>
          <div className='flex items-center space-x-4'>
            <a
              href='https://whatsapp.com'
              className='text-[#FFFDFD] flex gap-2 items-center hover:text-white'
            >
              <MdWhatsapp className='text-[#FFFDFD] ' /> WhatsApp
            </a>
            <a
              href='https://facebook.com'
              className='text-[#FFFDFD] flex gap-2 items-center hover:text-white'
            >
              <CiFacebook className='text-[#FFFDFD] ' />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Red Road Image */}
      <div className='absolute bottom-0 left-0 w-full'>
        <img src={redImg} alt='Road Design' className='w-full' />
      </div>
    </footer>
  )
}

export default Footer
