import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import about1Img from '../assets/img/1.png'
const AboutCard = () => {
    return (
        <div>
           


<section class=" bg-blueGray-200  py-10">
  <div >
    <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 text-center">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div class="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center mt-16">
     
      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2  rounded-lg ">
          <img alt="..." src={about1Img}/>
          <blockquote class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
                  </svg>
         
            <h4 class="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p class="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
            </p>
          </blockquote>
        </div>
      </div>
      <div class="w-full md:w-5/12  mr-auto ml-auto">
        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#15F5BA]">
          <h2 className='text-2xl font-semibold'>01</h2>
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
        Get Started with our software
        </h3>
        <p class="text-lg sm:mb-12 text-gray-600 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
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
                <h2>Digital Marketing & Branding</h2>
            </div>

        </div>
        
      </div>
    </div>
  </div>
 
</section>
        </div>
    );
};

export default AboutCard;