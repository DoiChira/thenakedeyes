import React from 'react';
import Hero from "../components/Hero"
import About from '../components/About';
import RecentWork from '../components/RecentWork';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';



const Home = () => {
  return <div>
     <Hero />
    <div className='py-[3rem]'>
    <About/>
    </div>
     <div className='mt-[4rem] gap'>
     <h3 className="font-light text-center text-3xl text-black">Recent <strong className='font-extrabold text-[#29679e] '>Work</strong></h3>
     <RecentWork/>
     </div>
     <div>
      <Testimonial/>
     </div>
     <Footer/>
    
  </div>;
};

export default Home;