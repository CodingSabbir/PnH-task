import React from 'react';
import aboutImg from '../assets/img/about.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import AboutCard from '../components/AboutCard';
const About = () => {
    return (
        <div>
            
<div class="py-5">
  <div class="container m-auto p-6  ">
        <div className='text-center pb-16'>
        <h1 className='text-2xl text-[#FF6500]'>About Us</h1>
        <h3 className='text-3xl font-semibold'>We provide best service for you customers</h3>
       <div className='flex justify-center py-3'> <p className='border border-b-2 w-20 border-[#15F5BA] '></p></div>
       <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur <br /> Quos labore dolores odit impedit. Blanditiis dolorum sed inventore .</p>
        </div>
   <div class="lg:flex justify-between items-center">
       <div class="lg:w-6/12 lg:p-0 p-7">
          <h1 class="text-3xl font-bold leading-tight mb-5 capitalize"> We are branding strategy service from 2001 for our customers.</h1>
          <p class="text-lg sm:mb-12 text-gray-600 font-semibold"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, ullam similique? Praesentium eligendi libero eius doloribus, porro quas error repellendus maiores non fuga dolorem saepe temporibus, voluptatum iure laboriosam natus. </p>
        <div className='flex justify-between'>
        <div>
            <div className='flex items-center gap-3 py-2 font-semibold'>
                <IoCheckmarkSharp className='text-[#15F5BA] font-bold text-2xl'/>
                <h2>Creative Design</h2>
            </div>
            <div className='flex items-center gap-3 py-2  font-semibold'>
                <IoCheckmarkSharp className='text-[#15F5BA] font-bold text-2xl'/>
                <h2>Responsive Design</h2>
            </div>
            <div className='flex items-center gap-3 py-2 font-semibold'>
                <IoCheckmarkSharp className='text-[#15F5BA] font-bold text-2xl'/>
                <h2>Retina Ready</h2>
            </div>
        </div>
        <div>
            <div className='flex items-center gap-3 py-2 font-semibold'>
                <IoCheckmarkSharp className='text-[#15F5BA] font-bold text-2xl'/>
                <h2>Modern Design</h2>
            </div>
            <div className='flex items-center gap-3 py-2  font-semibold'>
                <IoCheckmarkSharp className='text-[#15F5BA] font-bold text-2xl'/>
                <h2>Awesome Design</h2>
            </div>
            <div className='flex items-center gap-3 py-2 font-semibold'>
                <IoCheckmarkSharp className='text-[#15F5BA] font-bold text-2xl'/>
                <h2>Digital Marketing & Branding</h2>
            </div>
           
        </div>
        </div>
        </div>
       
        <div class="lg:w-5/12 order-2">
          <img src={aboutImg}
         />
        </div>
    </div>
    <a  href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 bg-[#15F5BA]">Read More</a>
  </div>
  <AboutCard/>
</div>
        </div>
    );
};

export default About;