
import React from 'react';
import HeroSection from '../components/HeroSection';
import About from './About';
import Service from './Service';

function Home() {
  return (
   <div>
    <HeroSection/>
    <About/>
    <Service/>
   </div>
  );
}

export default Home;