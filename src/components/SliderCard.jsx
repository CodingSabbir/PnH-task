import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


// import required modules
import { Pagination } from 'swiper/modules';
import ServiceText from './ServiceText';
import { FaLock } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { SiVorondesign } from "react-icons/si";
const SliderCard = () => {
    return (
        <>
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><ServiceText icon={<FaLock className='text-3xl font-bold text-[#FF6500] '/>} heading='Web Secuirity' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/></SwiperSlide>

        <SwiperSlide><ServiceText icon={<FcOnlineSupport className='text-3xl font-bold text-[#FF6500] '/>} heading='Online Marketing' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/></SwiperSlide>

        <SwiperSlide><ServiceText icon={<SiVorondesign className='text-3xl font-bold text-[#FF6500] '/>} heading='Branding Design' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/></SwiperSlide>

        <SwiperSlide><ServiceText icon={<FcOnlineSupport className='text-3xl font-bold text-[#FF6500] '/>} heading='Online Marketing' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/></SwiperSlide>

       

        <SwiperSlide><ServiceText icon={<FaLock className='text-3xl font-bold text-[#FF6500] '/>} heading='Web Secuirity' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/></SwiperSlide>

       
      </Swiper>
    </>
    );
};

export default SliderCard;



//  <div className='flex justify-between items-center container mx-auto p-6'>
// <ServiceText icon={<FaLock className='text-3xl font-bold text-[#FF6500] '/>} heading='Web Secuirity' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/>
// <ServiceText icon={<FcOnlineSupport className='text-3xl font-bold text-[#FF6500] '/>} heading='Online Marketing' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/>
// <ServiceText icon={<SiVorondesign className='text-3xl font-bold text-[#FF6500] '/>} heading='Branding Design' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et consectetur. Aliquam esse impedit doloribus nesciunt nostrum.'/>


// </div> 