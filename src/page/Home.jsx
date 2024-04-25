// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <h1>this is home page</h1>
//         </div>
//     );
// };

// export default Home;

// LandingPage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import About from './About';

function Home() {
  return (
   <div>
    <HeroSection/>
    <About/>
   </div>
  );
}

export default Home;