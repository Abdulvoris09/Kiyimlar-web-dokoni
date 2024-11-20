import React from 'react'

const Cta = () => {
  return (
    // CTA
    <div className='bg-white-700/90 text-black text-center py-10'>
      <div className='w-full max-w-[1300px] mx-auto px-5 bg-gray-400/40 rounded-2xl'>
        <div className='py-7'>
          <h2 className='font-bold md:text-4xl text-3xl leading-6 mb-10'>Hozir biz bilan bog'laning va chegirmalarga ega bo'ling</h2>

          <div className='flex text-center justify-center items-center gap-5 mx-auto'>
            <a className='flex justify-center text-center items-center  hover:text-blue-500  hover:border-blue-500 duration-500  md:border-2 md:border-black md:rounded-lg md:py-3 md:px-10' target='_blank' href="https://t.me/Abdulvoris20_09"><i className="fa-brands fa-telegram md:fa-lg fa-2xl mr-2"></i><span className='md:block hidden'>Telegram</span></a>
            <a className='flex justify-center text-center items-center  hover:text-green-500  hover:border-green-500 duration-500  md:border-2 md:border-black md:rounded-lg md:py-3 md:px-10' href="tel:+9989999999999"><i className="fa-solid fa-square-phone md:fa-lg fa-2xl mr-2"></i><span  className='md:block hidden'>Telefon</span></a>
            <a className='flex justify-center text-center items-center  hover:text-gray-700  hover:border-gray-700 duration-500  md:border-2 md:border-black md:rounded-lg md:py-3 md:px-10' target='_blank' href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope md:fa-lg fa-2xl mr-2"></i><span  className='md:block hidden'>E-mail</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta