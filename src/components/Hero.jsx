import React from "react";
import HeroVideo from "../assets/pixel.mp4"


const Hero = () => {
  return (
    <section>
    <div class="video">
      <video
        autoPlay
        loop
        muted
        width="100%"
        src={HeroVideo}
      ></video>
    </div>
  </section>

  
  );
};

export default Hero;
