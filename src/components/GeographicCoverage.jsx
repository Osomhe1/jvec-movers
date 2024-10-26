// src/components/GeographicCoverage.jsx
import mapView from '../assets/mapview.svg'

const GeographicCoverage = () => {
  return (
    <section className='bg-white py-16 relative'>
      <div className='container mx-auto text-center'>
        {/* Section Heading */}
        <h2 className='text-[24px] md:text-3xl font-bold mb-12'>
          GEOGRAPHIC COVERAGE
        </h2>

        {/* Background Image of Map */}
        <div className='relative w-full md:w-3/4 mx-auto h-full flex justify-center items-center'>
          <img
            src={mapView}
            alt='Map showing service areas'
            className='w-full h-auto object-cover'
          />

          {/* Text Box 1 - Local */}
          <div className='absolute left-0 top-0 md:top-16 bg-white shadow-lg rounded-lg p-4 md:p-6 w-80 md:w-96 text-left'>
            <h4 className='text-md md:text-lg font-bold'>LOCAL:</h4>
            <p className='text-gray-700 text-sm md:text-base'>
              Serving the Tri-Cities area and other cities in Tennessee
            </p>
          </div>

          {/* Text Box 2 - Long Distance */}
          <div className='absolute right-0 bottom-0 md:bottom-80 bg-white shadow-lg rounded-lg p-4 md:p-6 w-80 md:w-96 text-left'>
            <h4 className='text-md md:text-lg font-bold'>LONG-DISTANCE:</h4>
            <p className='text-gray-700 text-sm md:text-base'>
              Covering moves to Virginia, North Carolina, South Carolina,
              Atlanta, Kentucky, and Washington DC.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeographicCoverage
