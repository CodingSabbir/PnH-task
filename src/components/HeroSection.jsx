import React from 'react';
import heroImg from '../assets/img/main-banner.png'
import { FaVideo } from "react-icons/fa6";
const HeroSection = () => {
    return (
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center  mt-10 mx-auto sm:py-12 lg:pt-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">IT mattis
				<span className="dark:text-violet-600">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 bg-[#15F5BA]">Get Stated</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 bg-[#FF6500] "><FaVideo className='inline mr-5 items-center text-2xl' />Watch our Video</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={heroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    );
};

export default HeroSection;