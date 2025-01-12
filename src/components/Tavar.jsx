import React, { useState } from 'react'

const Tavar = () => {

  return (
    <section className="bg-gray-300 text-black py-7">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className='md:flex md:items-center md:justify-between'>
          <div className='mb-5 md:mb-0 lg:mb-0 xl:mb-0'>
            <div className="lg:mb-0 mb-5">
              <h2 data-aos="fade-right" className="font-bold text-4xl mb-[30px] block aos-init aos-animate">Yangi mahsulotlar kelgan</h2>
            </div>
            <div>
              <p data-aos="fade-right" className='font-bold text-lg aos-init aos-animate'>Yangi mahsulot zavodga 1 oy ichida yetib boradi.</p>
              <p data-aos="fade-right" className='font-bold text-lg aos-init aos-animate'>Biz mato sotamiz</p>
            </div>
          </div>
          <img style={{ objectFit: 'cover', objectPosition: 'top' }}  className='md:w-[500px] md:h-[400px] sm:w-[200px] sm:h-[200px] w-full h-[300px] rounded-xl aos-init aos-animate' src="./img/erkak12.jpeg" aria-hidden="false"/>
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default Tavar