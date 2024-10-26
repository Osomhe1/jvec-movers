// src/components/WeMoveAndClean.jsx
import sectionImg from '../assets/Group280.png'

const WeMoveAndClean = () => {
  return (
    <section className='bg-white px-8 lg:px-20 py-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Left Text Section */}
        <div className='lg:w-2/3'>
          <h2 className=' md:text-[32px] lg:text-[48px] font-bold text-[#535558] mb-4'>
            WE MOVE AND CLEAN
          </h2>

          <p
            data-aos='fade-down'
            className='md:text-[20px] lg:text-[32px] font-semibold text[#121212] mb-4'
          >
            POWERED BY MD ENVIRONMENTAL SERVICES | PROFESSIONAL CLEANING
            SERVICES
          </p>
          <button className='bg-priRed hover:bg-red-600 text-white py-3 px-8 rounded-lg'>
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className='lg:w-1/3 flex justify-end mt-10 lg:mt-0'>
          <img
            src={sectionImg} // Use the path to your image here
            alt='MD Environmental Services'
            className='w-full h-auto max-w-sm'
          />
        </div>
      </div>
    </section>
  )
}

export default WeMoveAndClean
