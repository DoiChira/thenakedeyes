import React from "react";


const Hero = () => {
  return (
    <div class="relative h-screen overflow-hidden">
    <div class="absolute inset-0 z-0">
    <video autoplay muted loop class="w-full h-full object-cover">
      <source src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">

        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3l8 9H2l8-9zm0 13l8-9h-16l8 9z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    </div>
  
  );
};

export default Hero;
