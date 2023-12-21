import React from "react";
import HeroVideo from "../assets/pixel.mp4"

const Hero = () => {
  return (
    <section className="hero">
      <div class="video">
        <video autoPlay loop muted src={HeroVideo}></video>
        <div className="content-overlay">
          <h1 className="text-4xl md:text-6xl pb-4 md:pb-6 font-thin">
            Welcome to<br />
            <strong className="font-bold">The Naked Eyes</strong>
          </h1>
          <p className="hidden md:block text-base md:text-xl">
            Where love is celebrated in its purest form. Join us on our journey as we embark on a beautiful tale of two souls becoming one under the vast canvas of love and commitment. Explore our story, discover our journey, and anticipate the magic of our union.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
