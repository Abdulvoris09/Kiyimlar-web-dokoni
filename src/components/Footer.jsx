import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-800/100 text-gray-300'>
      <div className='w-full max-w-[1300px] mx-auto px-5 py-12'>
        <div className="md:flex md:justify-between gap-7">
          <div className='mb-5 md:mb-0'>
            <Link to={`/`}>
              <h1 className='font-russo font-light md:text-[40.34px] text-[23px] text-white leading-[135%] uppercase mb-5 hover:text-black  hover:border-gray-500 duration-500'>akstar</h1>
            </Link>
            <div>
              <ul className='flex space-x-3'>
                <li className='block space-y-3 text-center justify-center items-center gap-5 mx-auto'>
                  <a className='flex justify-center text-center items-center  hover:text-blue-500  hover:border-blue-500 duration-500  md:border-2 md:border-black md:rounded-lg md:py-3 md:px-10' target='_blank' href="https://t.me/Abdulvoris20_09"><i className="fa-brands fa-telegram md:fa-lg fa-2xl mr-2"></i><span className='md:block hidden'>Telegram</span></a>
                  <a className='flex justify-center text-center items-center  hover:text-green-500  hover:border-green-500 duration-500  md:border-2 md:border-black md:rounded-lg md:py-3 md:px-10' href="tel:+9989999999999"><i className="fa-solid fa-square-phone md:fa-lg fa-2xl mr-2"></i><span className='md:block hidden'>Telefon</span></a>
                  <a className='flex justify-center text-center items-center  hover:text-gray-500  hover:border-gray-500 duration-500  md:border-2 md:border-black md:rounded-lg md:py-3 md:px-10' target='_blank' href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope md:fa-lg fa-2xl mr-2"></i><span className='md:block hidden'>E-mail</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-6 md:mb-0 '>
            <h3 className='font-bold text-2xl leading-normal mb-10 hover:text-gray-500  hover:border-gray-500 duration-500 cursor-pointer'>Menyu</h3>
            <ul className='space-y-6'>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal hover:text-gray-500  hover:border-gray-500 duration-500 ' to='/'>Bosh sahifa</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal hover:text-gray-500  hover:border-gray-500 duration-500 ' to='/like'>Sevimlilar</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal hover:text-gray-500  hover:border-gray-500 duration-500 ' to={'магазин'}>Savat</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal hover:text-gray-500  hover:border-gray-500 duration-500 ' to={'/ьлог'}>Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className='flex flex-col space-y-4 mb-7'>
              <span className='font-bold text-2xl leading-normal cursor-pointer hover:text-gray-500  hover:border-gray-500 duration-500'>Yordam</span>
              <div className='space-y-2'>
                <a className=' block mb-2.5 hover:text-gray-500  hover:border-gray-500 duration-500' href="tel:+7 (499) 286 87 10">+998 33 722 85 05</a>
                <a className='hover:text-gray-500  hover:border-gray-500 duration-500' target="_blank" href="https://akstar.help@gmail.com">uzsmart017@gmail.com</a>
              </div>
            </div>
            <div>
              <span className='mb-2 font-normal text-base block leading-normal hover:text-gray-500  hover:border-gray-500 duration-500 cursor-pointer'>Maxfiylik siyosati</span>
              <span className='font-normal text-base leading-normal hover:text-gray-500  hover:border-gray-500 duration-500 cursor-pointer'>Shaxsiy ma'lumotlarni qayta ishlash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer