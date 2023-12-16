import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Card = ({ image, text }) => {
  return (
    <div className="relative group rounded-lg h-96 overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105">
      <img src={image} alt="Card" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 transition duration-300 transform hover:scale-x-105 hover:scale-y-105">
        <p className="text-center">{text}</p>
        <button className="mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

const MostPopular = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 1' },
    { id: 6, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 2' },
    { id: 7, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 3' },
    { id: 8, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Description for Image 4' },
  ];

  return (
   <div>
     <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      transitionTime={500}
      emulateTouch={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={30}
      swipeable={true}
     
    >
      {images.map((image, index) => (
        <div key={index} className="m-4  ">
          <Card  image={image.src}  text={image.text} />
        </div>
      ))}
    </Carousel>
   </div>
  );
};

export default MostPopular;
