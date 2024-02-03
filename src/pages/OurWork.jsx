import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { Paper, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import videoW from "../assets/sangeetMansi.mp4"
import video1 from "../assets/sumitGarima.mp4"
import MostPopular from '../components/MostPopular';
import Footer from '../components/Footer';
import CorporateEvents from '../components/CorporateEvents';
const VideoContainer = styled(Paper)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'full',
});

const Video = styled('video')({
  width: '100%',
  height: 'full',
});

const OurWork = () => {
  const videos = [
    video1,
    videoW,
    video1,
    videoW,
    video1,
    // Add more video URLs as needed
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7, // Show two videos per slide
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one video per slide on smaller screens
        },
      },
    ],
  };

  const CustomArrow = ({ onClick, icon, style }) => (
    <IconButton onClick={onClick} sx={{ color:"#fff", padding:"10px", position: 'absolute', top: '50%', transform: 'translateY(-50%)', ...style }}>
      {icon}
    </IconButton>
  );

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
    <div className='mt-20  relative' >
      <Slider  {...settings} ref={sliderRef}>
        {videos.map((video, index) => (
          <div key={index} style={{}} className='py-4 px-2 '>
            <VideoContainer>
              <Video autoPlay controls muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            </VideoContainer>
          </div>
        ))}
      </Slider>
      <CustomArrow onClick={goToPrev} icon={<ArrowBackIosNewIcon fontSize={"large"} sx={{ borderRadius: "0" }} />} style={{ left: 50 }} />
      <CustomArrow onClick={goToNext} icon={<ArrowForwardIosIcon fontSize={"large"} />} style={{ right: 50 }} />
    </div>
    <MostPopular/>
    <div className='mb-8'>
    <CorporateEvents/>
    </div>
    {/* <BabyPhotoshoot/> */}
    <Footer/>
    </>
  );
};

export default OurWork;
