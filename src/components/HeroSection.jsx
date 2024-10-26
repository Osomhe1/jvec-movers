// src/components/HeroSection.jsx
import HeroImg from '../assets/Frame7.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
      <section className=' bg-white pb-12 text-white '>
        <div className='container mx-auto bgbgColor   grid md:grid-cols-2  items-center'>
          {/* Text Section */}
          <div className='  lg:px-10 bg-bgColor h-full text-center md:text-start py-8 md:py-0'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold md:pt-24 lg:pt-40 py-4 md:py-0 uppercase leading-tight'>
              <span className='text-priRed '>MOVE </span> WITH CONFIDENCE:
            </h1>
            <p className='text-lg md:text-2xl lg:text-5xl font-medium  md:mt-4'>
              Smooth Moves Start Here
            </p>
            <p className='typing-animation text-center mt-6 text-sm md:text-lg text-white '>
              Professional and affordable.Fully insured.{' '}
            </p>

            <div className='block'>
              <button className='bg-priRed  hover:bg-red-600 text-white py-3 px-8 mt-6 rounded-lg'>
                Get Started
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className='md:mt-10 lg:mt-0 '>
            <img
              src={HeroImg}
              alt='Professional Movers'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
