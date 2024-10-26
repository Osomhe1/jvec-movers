// src/components/WhatWeRepresent.jsx
import workersImg from '../assets/Frame80.jpg'

const WhatWeRepresent = () => {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto justify-center flex flex-col md:flex-row items-center'>
        {/* Left Side: Image */}
        <div className='w-[380px] md:w-1/2'>
          <img
            src={workersImg}
            alt='Moving service'
            className='w-full h-auto object-cover'
          />
        </div>

        {/* Right Side: Text Block */}
        <div className='w-[350px] -top-24 md:top-0 md:w-1/2 bg-bgColor text-center text-white p-8 md:ml-[-15rem] relative py-12 z-10'>
          <h2 className='test-[24px] md:text-[48px] font-bold text-[#EAEAEA] mb-4'>
            WHAT WE REPRESENT
          </h2>
          <h3 className='text-[18px] md:text-[30px] font-semibold mb-6'>
            STRESS-FREE MOVES, PERFECT CLEAN
          </h3>
          <p className='mb-8 text-sm md:text-[18px]'>
            JVEC MOVERS is dedicated to providing top-notch moving and cleaning
            services. Based in Johnson City, Tennessee, we cater to both local
            and long-distance relocations, including moves to Virginia, North
            Carolina, South Carolina, Atlanta, Kentucky, and Washington DC. We
            specialize in making your moving experience as smooth and
            stress-free as possible, from packing and transportation to cleaning
            your new home or office.
          </p>
          <button className='bg-priRed hover:bg-red-600 text-white py-3 px-8 rounded-lg'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhatWeRepresent
