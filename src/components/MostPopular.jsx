import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { styled } from '@mui/system';
import { Paper, IconButton, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image1 from "../assets/about-1.webp"; // Import your images here
import Image2 from "../assets/about-2.webp";
import Image3 from "../assets/popular-1.webp";
import Image4 from "../assets/popular-2.webp";
import Image5 from "../assets/popular-3.webp";
import Image6 from "../assets/popular-1.webp";
import Image7 from "../assets/popular-5.webp";


const ImageContainer = styled(Paper)({
  position: 'relative',
  overflow: 'hidden',
  height: '400px', // Adjust the height here as needed
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Adding a dark box shadow
  '&:hover .overlay': {
    transform: 'scale(1)',
  },
});

const ImageOverlay = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'scale(0)',
  transition: 'transform 0.1s ease-in-out',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.1s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const MostPopular = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, ]; // Replace Image URLs with your own

  const sliderRef = useRef(null);
  const [showDescription, setShowDescription] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CustomArrow = ({ onClick, icon, style }) => (
    <IconButton onClick={onClick} sx={{ color:"#fff", padding:"10px", position: 'absolute', top: '50%', transform: 'translateY(-50%)', ...style }}>
      {icon}
    </IconButton>
  );

  const toggleDescription = (index) => {
    setCurrentImage(index);
    setShowDescription(!showDescription);
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className='mt-20 '>
     <h3 className="font-light text-center pb-6  text-4xl text-black">Most <strong className='font-extrabold text-[#29679e] '>Popular</strong></h3>
      <div className='relative'>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}  className={`overflow-hidden p-4 transform transition-transform duration-50 ${
            showDescription && currentImage === index ? 'scale-110 shadow-lg' : 'scale-100 shadow'
          }`} onMouseEnter={() => toggleDescription(index)} onMouseLeave={() => toggleDescription(index)}>
            <ImageContainer>
              <Image src={image}  alt={`Image ${index + 1}`} />
              <ImageOverlay className={showDescription && currentImage === index ? 'overlay' : 'overlay'}>
              <Typography color="white" variant="h6" gutterBottom>
                Anita & Colm
                <div className='flex justify-center'>
                <div className='w-[4rem] text-center bg-white py-[1px]'></div>
                </div>
              </Typography>
                <Typography variant="body1" sx={{fontWeight:"bold"}} color="white">
                  01 December 2023
                </Typography>
                <Typography variant="body1" sx={{padding:4}} color="white">
                They struggled for 13 years to be together, because he was Irish and she was Punjabi, but through it all, she knew she wanted a wedding film by us. I met Anita & Colm in London, back in 2019 to discuss her story… 
                </Typography>
                <Button variant="text" sx={{marginTop:2,paddingY:"2px", paddingX:"0", borderRadius:"0", borderBottom:"solid", borderWidth:"1px", borderColor:"white", color:"white"}} >
                  Learn More
                </Button>
              </ImageOverlay>
            </ImageContainer>
          </div>
        ))}
      </Slider>
      <CustomArrow onClick={goToPrev} icon={<ArrowBackIosNewIcon fontSize={"large"} sx={{ borderRadius: "0" }} />} style={{ left: 50 }} />
      <CustomArrow onClick={goToNext} icon={<ArrowForwardIosIcon fontSize={"large"} />} style={{ right: 50 }} />
      </div>
    </div>
  );
};

export default MostPopular;
