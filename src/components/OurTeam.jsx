// src/components/OurTeam.jsx
import groupImg1 from '../assets/Group-car.svg'
import groupImg2 from '../assets/Group-safty.svg'
import groupImg3 from '../assets/Group-stand.svg'

const OurTeam = () => {
  return (
    <section className='bg-black mt-24 text-white py-16'>
      <div className='container mx-auto text-center'>
        {/* Heading */}
        <h2 className='animated-text text-[24px] md:text-4xl font-bold text-priRed'>
          OUR TEAM
        </h2>
        <p className='text-[18px] md:text-xl font-semibold mt-2 mb-12'>
          HIGHLY TRAINED PROFESSIONALS IN
        </p>

        {/* Feature Cards */}
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {/* Card 1 */}
          <div className='bg-black p-4'>
            <div className=' bg-white max-w-[350px] px-4 py-8 rounded-lg mx-auto'>
              <img
                src={groupImg1}
                alt='Moving Techniques'
                className='mx-auto mb-4 h-40 w-auto'
              />
            </div>
            <h4 className='text-xl font-bold mt-4'>Moving Techniques</h4>
          </div>

          {/* Card 2 */}
          <div className='bg-black p-4'>
            <div className='bg-white max-w-[350px] px-4 py-8 rounded-lg mx-auto'>
              <img
                src={groupImg2}
                alt='Safety Protocols'
                className='mx-auto mb-4 h-40 w-auto'
              />
            </div>
            <h4 className='text-xl font-bold mt-4'>Safety Protocols</h4>
          </div>

          {/* Card 3 */}
          <div className='bg-black p-4'>
            <div className='bg-white max-w-[350px] px-4 py-8 rounded-lg mx-auto'>
              <img
                src={groupImg3}
                alt='Customer Service Standards'
                className='mx-auto mb-4 h-40 w-auto'
              />
            </div>
            <h4 className='text-xl font-bold mt-4'>
              Customer Service Standards
            </h4>
          </div>
        </div>

        {/* Description */}
        <p className='text-md px-2 md:text-lg max-w-4xl mx-auto mb-12'>
          Our team comprises highly trained professionals who can handle moves
          of all sizes, from small apartments to large commercial relocations.
          Led by our founder and CEO,{' '}
          <span className='text-priRed font-bold'>Joshua</span>, we are
          committed to excellence in every move. Our staff undergoes rigorous
          training in moving techniques, safety protocols, and customer service
          standards to ensure your belongings are handled with the utmost care
          and professionalism.
        </p>

        {/* Learn More Button */}
        <button className='bg-priRed hover:bg-red-600 text-white py-3 px-8 rounded-lg'>
          Learn More
        </button>
      </div>
    </section>
  )
}

export default OurTeam
