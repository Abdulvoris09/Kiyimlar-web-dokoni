import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Tavar from './Tavar';
import Main from './Main';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { api, api2, api3, bolg } from '../../public/data';
import { Card, Option, Select } from '@material-tailwind/react';
import MainWoman from './MainWoman';
import MainKids from './MainKids';


const Frame = ({ addCart, addCart1, addCart2, addLike, removeLike, addLike1, removeLike1, addLike2, removeLike2 }) => {
  const [select, setSelect] = useState('opt1');
  const add = (e) => {
    setSelect(e);
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div>
        <Hero />
        <Tavar />
        <div className='w-full max-w-[1300px] mx-auto px-5 mt-10'>
          <div className="mb-4">
            <div className="border-[#191919] border-b-2">
              <div className='sm:flex items-center justify-between mb-5'>
              <h2
                data-aos="fade-right"
                className="flex items-center md:font-bold font-medium text-xl md:text-2xl brend aos-init aos-animate mb-3 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
              >
                Filtr
              </h2>
              <div>
                <Select onChange={(e) => add(e)} label='Filtr'>
                  <Option value='фильтр' disabled>Filtr</Option>
                  <Option value='opt1'>Erkaklar uchun</Option>
                  <Option value='opt2'>Ayollar uchun</Option>
                  <Option value='opt3'>Yosh bolalar uchun</Option>
                </Select>
              </div>

              </div>
            </div>
          </div>
          <div className={`relative mb-16`}>
            <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7`}>
              {select === 'opt1'
                ? api.map((e) => (
                  <Main key={e.id} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} e={e} />
                ))
                : select === 'opt2'
                  ? api2.map((e) => (
                    <MainWoman key={e.id} addCart1={addCart1} addLike1={addLike1} removeLike1={removeLike1} e={e} />
                  ))
                  : select === 'opt3'
                    ? api3.map((e) => (
                      <MainKids key={e.id} addCart2={addCart2} addLike2={addLike2} removeLike={removeLike2} e={e} />
                    ))
                    : null}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Frame