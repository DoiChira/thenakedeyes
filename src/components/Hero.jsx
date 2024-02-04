import React from "react";
import HeroVideo from "../assets/sangeetMansi.mp4"


const Hero = () => {
  const WhatsAppLink = ({ phoneNumber, message }) => {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(message)}`;
    return (
        <a href={whatsappUrl} className='text-lg inline-block bg-green-500 p-2 text-white rounded-sm hover:bg-green-600 my-6 items-center justify-center align-middle' target="_blank" rel="noopener noreferrer">
       <button className='ml-2 '>BOOK US NOW</button>
        </a>
    );
};

  return (
  <section className="hero ">
  <div className="video relative w-full">
  <video autoPlay loop muted className="w-full h-auto" src={HeroVideo}></video>
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="content-overlay text-center text-white">
      <h1 className="text-4xl md:text-6xl pb-4 md:pb-6 font-thin">
        Welcome to<br/>
        <strong className="font-bold">The Naked Eyes</strong>
      </h1>
      <p className="hidden md:block text-base md:text-xl">
        Where love is celebrated in its purest form. Join us on our journey as we embark on a beautiful tale of two souls becoming one under the vast canvas of love and commitment. Explore our story, discover our journey, and anticipate the magic of our union.
      </p>
      <WhatsAppLink phoneNumber={"9395642144"} message={` You, can you please inform me More`} />
    </div>
  </div>
</div>

</section>

  
  );
};

export default Hero;

