// src/components/ClientsWeServe.jsx
import image1 from '../assets/homeowners.svg'
import image2 from '../assets/renters.svg'
import image3 from '../assets/business.svg'
import image4 from '../assets/manager.svg'

const ClientsWeServe = () => {
  return (
    <section className='bg-white py-16 md:px-16'>
      <div className='container mx-auto '>
        {/* Section Heading */}
        <h2 className='text-[24px] animated-text md:text-[48px] text-center text-[#535558] font-bold mb-4'>
          CLIENTS WE SERVE
        </h2>
        <p
          data-aos='fade-down'
          className='text-[18px]  md:text-[32px] text-center text-[#121212] font-semibold mb-12'
        >
          OUR SERVICES CATER TO
        </p>

        {/* Grid Layout */}
        <div className='grid px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Homeowners */}
          <div className='bg-[#F4F4F4] p-6 rounded-lg '>
            <h4 className='text-[16px] md:text-xl font-bold mb-2'>
              HOMEOWNERS
            </h4>
            <img src={image1} alt='Homeowners' className=' mb-4 h-20' />
            <p className='text-gray-600'>
              Whether moving across town or to a new state, we help homeowners
              transition smoothly.
            </p>
          </div>

          {/* Renters */}
          <div className='bg-[#F4F4F4] p-6 rounded-lg '>
            <h4 className='text-[16px] md:text-xl font-bold mb-2'>RENTERS</h4>
            <img src={image2} alt='Renters' className='mb-4 h-20' />
            <p className='text-gray-600'>
              We assist renters with their moves, ensuring they leave their
              rental properties clean and in good condition.
            </p>
          </div>

          {/* Businesses */}
          <div className='bg-[#F4F4F4] p-6 rounded-lg '>
            <h4 className='text-[16px] md:text-xl font-bold mb-2'>
              BUSINESSES
            </h4>
            <img src={image3} alt='Businesses' className='mb-4 h-20' />
            <p className='text-gray-600'>
              Our commercial moving services help businesses relocate with
              minimal disruption.
            </p>
          </div>

          {/* Property Managers */}
          <div className='bg-[#F4F4F4] p-6 rounded-lg '>
            <h4 className='text-[16px] md:text-xl font-bold mb-2'>
              PROPERTY MANAGERS
            </h4>
            <img src={image4} alt='Property Managers' className=' mb-4 h-20' />
            <p className='text-gray-600'>
              We partner with property managers to offer seamless moving
              services for their tenants.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsWeServe
