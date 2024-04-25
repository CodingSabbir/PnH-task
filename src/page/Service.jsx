import React from 'react';
import ServiceCard from '../components/SliderCard';
import ServiceProduct from '../components/ServiceProduct';

const Service = () => {
    return (
        <div className='bg-[#EDF5FF] py-20'>
              <div className='text-center pb-16'>
        <h1 className='text-2xl text-[#FF6500]'>Services</h1>
        <h3 className='text-3xl font-semibold'>We provide best service for you customers</h3>
       <div className='flex justify-center py-3'> <p className='border border-b-2 w-20 border-[#15F5BA] '></p></div>
       <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur <br /> Quos labore dolores odit impedit. Blanditiis dolorum sed inventore .</p>
        </div>
        <ServiceCard/>
        <ServiceProduct/>
        </div>
    );
};

export default Service;