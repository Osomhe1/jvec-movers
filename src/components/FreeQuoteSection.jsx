// src/components/FreeQuoteSection.jsx

const FreeQuoteSection = () => {
  return (
    <section className='bg-black text-white py-16'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center px-8 lg:px-16'>
        {/* Left Side: Text Block */}
        <div className='lg:w-[400px] text-center md:text-start w-[400px] px-4'>
          <h2
            data-aos='fade-up'
            className='text-[24px] md:text-4xl font-bold mb-4'
          >
            READY FOR A STRESSLESS MOVE? GET YOUR FREE QUOTE
          </h2>
          <p className='text-lg text-gray-400 mb-8'>
            Fill out our online booking form to schedule your move with JVEC
            MOVERS. Provide details about your move, and we’ll get back to you
            with a customized plan and quote.
          </p>
        </div>

        {/* Right Side: Free Quote CTA */}
        <div className='lg:w-3/5 px-4 grid relative'>
          <div className='flex w-[370px] justify-between md:w-full items-center py-4 md:py-12'>
            <h3 className='text-[30px] md:text-[71px] font-semibold text-priRed'>
              Free Quote
            </h3>
            <span className='text-priRed md:text-4xl'>➔</span>
          </div>
          <div className=' w-full h-0.5 bg-priRed'></div>
        </div>
      </div>
    </section>
  )
}

export default FreeQuoteSection
