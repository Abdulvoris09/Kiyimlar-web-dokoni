import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { api, api2 } from '../../public/data';
import 'swiper/css';
import { useParams } from 'react-router-dom';

const AyolKiyim = ({ addCart1, additionalInfo }) => {
    const [hidden, setHidden] = useState(false);
    const [tab, setTab] = useState(1);
    const setActiveTab = (id) => {
        setTab(id);
    };

    const [tabImg, setTabImg] = useState(4);
    const setActiveTabImg = (id) => {
        setTabImg(id);
    };

    const { id } = useParams();
    const e = api2.find(i => i.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='w-full max-w-[1300px] mx-auto px-5 py-10 mb-16'>
                {/* img-tab */}
                <div className={`grid xl:grid-cols-2 grid-cols-1 gap-7 mb-16`}>
                    <div className='md:flex md:justify-between'>
                        <div className='md:block hidden'>
                            <div className='md:w-28 grid grid-cols-4 md:grid-cols-1 gap-7 mr-5'>
                                {e.tab.map((e) => {
                                    return (
                                        <button key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img style={{ objectFit: 'cover', objectPosition: 'top' }} className={`md:w-[107px] md:h-[107px] w-[70px] h-[70px] rounded-lg ${e.tab === e.id ? 'border-2 border-[#1B37A3] rounded duration-500' : 'border-transparent'}`} src={e.img} aria-hidden='false' />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='md:mb-0 mb-5'>
                            {
                                e.tab.map((i) => {
                                    return (
                                        <div key={i.id} className={`w-full ${tabImg === i.id ? 'block' : 'hidden'}`}>
                                            <img style={{ objectFit: 'cover', objectPosition: 'top' }} className='w-full h-[320px] md:w-[520px] md:h-[520px]' src={i.img} aria-hidden="false"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='md:hidden block'>
                            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-1 gap-7'>
                                {e.tab.map((e) => {
                                    return (
                                        <button key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img style={{ objectFit: 'cover', objectPosition: 'top' }} className={`md:w-28 md:h-28 w-[70px] h-[70px] rounded-lg ${e.tab === e.id ? 'duration-500' : 'border-transparent'}`} src={e.img} aria-hidden='false' />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='space-y-7'>
                        <div>
                            <h2 className='font-bold text-[28px] leading-9 md:text-4xl md:leading-normal'>{e.lc}</h2>
                            <span className='font-bold text-sm text-[#9ACC6C]'>Omborda mavjudlari (15)</span>
                        </div>
                        <p className='font-normal text-base leading-normal'>Sifatli va tezkor</p>
                        <div className='space-y-4'>
                            <h3 className='font-bold text-lg leading-normal brend'>Tarif</h3>
                            <button onClick={()=> setHidden(!hidden)} className='font-semibold text-sm leading-normal logo'>Batafsil</button>
                            {hidden && 
                            <p>{e.text}</p>
                            }
                        </div>
                        <p className='font-extrabold text-4xl leading-normal'>300 000 so'm</p>
                        <button onClick={() => addCart1(e.id)} className='w-[240px] font-semibold text-lg leading-6 text-white bg-[#1B37A3] rounded-lg py-4'>
                            {e.karzinka}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

AyolKiyim.propTypes = {
    addCart1: PropTypes.func.isRequired,
    additionalInfo: PropTypes.string,
};

export default AyolKiyim;
