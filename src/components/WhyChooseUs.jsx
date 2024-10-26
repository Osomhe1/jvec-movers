// src/components/WhyChooseUs.jsx
import group1 from '../assets/Group1.svg'
import group2 from '../assets/Group2.svg'
import group3 from '../assets/Group3.svg'
import group4 from '../assets/Group4.svg'

const WhyChooseUs = () => {
  return (
    <section className='relative bg-white py-24 md:py-32'>
      {/* Full Width Background Image */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: `url('/images/Group17.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Content Container */}
      <div className='relative container px-12 mx-auto flex flex-col lg:flex-row items-center lg:items-start z-10'>
        {/* Left Side: Text Block */}
        <div className='text-center md:text-start lg:w-2/5 md:px-8 md:py-16'>
          <h2 className='animated-text text-[24px] md:text-[48px] font-bold text-[#535558] mb-4'>
            WHY CHOOSE US
          </h2>
          <h3 className='text-[18px] md:text-[32px] font-semibold text-[#121212] uppercase mb-4'>
            YOUR PERSONALIZED MOVING SOLUTION
          </h3>
          <p className=' text-[#121212] text-sm md:text-[18px] mb-8'>
            Our mission is to provide stress-free, efficient, and courteous
            moving and cleaning services, ensuring seamless transitions for both
            residential and commercial clients. Explore our services and see how
            we can make your next move effortless.
          </p>
          <button className='bg-priRed hover:bg-red-600 text-white py-3 px-8 rounded-lg'>
            Learn More
          </button>
        </div>

        {/* Right Side: Feature Cards */}
        <div className='lg:w-3/5 bg-white md:divide-x-2 py-12 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 lg:mt-0 px-8'>
          <div className='md:divide-y-2 divide-y-2 md:divide-black'>
            {/* Card 1 */}
            <div className='bg-white  flex md:p-6 '>
              <img
                src={group1}
                alt='Customer Service'
                className='h-10 w-10 md:mr-4'
              />
              <div className=' items-center mb-4'>
                <h4 className='text-xl text-[#121212] text-[16px] font-bold'>
                  EXCEPTIONAL CUSTOMER SERVICE
                </h4>
                <p className=' text-[#121212] text-sm md:text-[18px]'>
                  We prioritize customer satisfaction by offering friendly,
                  professional service. Our team is dedicated to making your
                  moving experience as stress-free as possible.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white flex md:p-6 '>
              <img
                src={group2}
                alt='GPS Tracking'
                className='h-10 w-10 md:mr-4'
              />
              <div className=' items-center mb-4'>
                <h4 className='text-xl text-[#121212] text-[16px] font-bold'>
                  GPS TRACKING
                </h4>
                <p className='text-[#121212] text-sm md:text-[18px]'>
                  We provide real-time tracking of your belongings, giving you
                  peace of mind during the moving process.
                </p>
              </div>
            </div>
          </div>

          <div className='divide-y-2  md:spx-4'>
            {/* Card 3 */}
            <div className='bg-white border-t-2 md:border-t-0 md:pt-0 pt-4 flex  md:p-6 '>
              <img
                src={group3}
                alt='Competitive Pricing'
                className='h-10 w-10 md:mr-4'
              />
              <div className=' items-center mb-4'>
                <h4 className=' md:text-xl text-[#121212] text-[16px] font-bold'>
                  COMPETITIVE PRICING
                </h4>
                <p className='text-[#121212] text-sm md:text-[18px]'>
                  We offer competitive rates for our services without
                  compromising on quality. Get a high-value service at a price
                  that fits your budget.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className='bg-white flex  md:p-6 '>
              <img
                src={group4}
                alt='Comprehensive Services'
                className='h-10 w-10 md:mr-4'
              />
              <div className=' items-center mb-4'>
                <h4 className='text-xl text-[#121212] text-[16px] font-bold'>
                  COMPREHENSIVE SERVICES
                </h4>
                <p className='text-[#121212] text-sm md:text-[18px]'>
                  In addition to moving, we provide cleaning services to ensure
                  your new space is spotless and ready for you to move in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
