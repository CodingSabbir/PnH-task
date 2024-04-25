
import React from 'react';
import HeroSection from '../components/HeroSection';
import About from './About';
import Service from './Service';
import TeamMember from './TeamMember';



function Home() {
  return (
   <div>
    <HeroSection/>
    <About/>
    <Service/>
    <TeamMember/>
    
   </div>
  );
}

export default Home;