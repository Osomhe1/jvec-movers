// src/components/DownloadAppSection.jsx

import AppStoreBadge from '../assets/app-store.png'
import GooglePlayBadge from '../assets/play-store.png'
import { ReactTyped } from 'react-typed'

const DownloadAppSection = () => {
  return (
    <section className='bg-black px-20 py-12'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6'>
        {/* Text */}
        <ReactTyped
          strings={[' DOWNLOAD THE APP']}
          typeSpeed={50} // Speed at which each character is typed
          backSpeed={30} // Speed at which characters are erased
          backDelay={2000} // Delay before starting to erase
          loop // Loop indefinitely
          className=' md:text-3xl font-bold text-white'
        />

        {/* App Store and Google Play Links */}
        <div className='flex justify-center flex-col md:flex-row items-center gap-6 lg:gap-12'>
          {/* App Store */}
          <a
            href='https://apps.apple.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={AppStoreBadge}
              alt='Download on the App Store'
              className='h-12'
            />
          </a>

          {/* Google Play */}
          <a
            href='https://play.google.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={GooglePlayBadge}
              alt='Get it on Google Play'
              className='h-12'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default DownloadAppSection
