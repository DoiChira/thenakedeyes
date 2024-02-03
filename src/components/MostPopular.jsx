import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { styled } from '@mui/system';
import { Paper, IconButton, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image1 from "../assets/sumitCover.jpg"; // Import your images here
import Image2 from "../assets/sangeetCover.jpg";
import Image3 from "../assets/sumitCover.jpg";
import Image4 from "../assets/sangeetCover.jpg";
import Image5 from "../assets/sumitCover.jpg";
import Image6 from "../assets/sangeetCover.jpg";
import Image7 from "../assets/sumitCover.jpg";
import { Link } from 'react-router-dom';
import video1 from "../assets/sumitGarima.mp4"
import video2 from "../assets/sangeetMansi.mp4"


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
  const itemsData = [
    {
      img: Image1,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image2,
      videoUrl: video2,
      title: 'SANGEET & MANSI | THE NAKED EYE',
      date: 'Sangeet & Mansi | 2023',
      id:"sangeet-mansi",
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984913/sangit/b9rb8wut7in8fdrs6lfa.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984903/sangit/dpet7cfpvnaox5xiw8d9.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984900/sangit/dtxhrcfga9al5ax82itv.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984886/sangit/rpekkgyyf8rf4a9gssm7.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984878/sangit/jl2r7gz93v9grmhqrxzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984868/sangit/kleikuxdhjbb6zgmkqh8.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984837/sangit/wizyhn2busod4i15rqsw.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984823/sangit/lh0wl0ilycmmkwdsfs8j.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984804/sangit/ids2o1jczspqdu32meci.jpg",
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image3,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image4,
      videoUrl: video2,
      title: 'SANGEET & MANSI | THE NAKED EYE',
      date: 'Sangeet & Mansi | 2023',
      id:"sangeet-mansi",
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941019/nakedeye/r0ixnerou2ojrafin6nr.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941003/nakedeye/wvhhlfxgj6ewso4zhdgz.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940990/nakedeye/bs4kv7ld7ljewfnw94ng.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940927/nakedeye/rlgfkk14ptfu1os2wjsq.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940949/nakedeye/conzzqggo4tp7zjz9e2z.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image5,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image6,
      videoUrl: video2,
      title: 'SANGEET & MANSI | THE NAKED EYE',
      date: 'Sangeet & Mansi | 2023',
      id:"sangeet-mansi",
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941019/nakedeye/r0ixnerou2ojrafin6nr.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941003/nakedeye/wvhhlfxgj6ewso4zhdgz.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940990/nakedeye/bs4kv7ld7ljewfnw94ng.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940927/nakedeye/rlgfkk14ptfu1os2wjsq.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940949/nakedeye/conzzqggo4tp7zjz9e2z.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image7,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
  ];
  const sliderRef = useRef(null);
  const [showDescription, setShowDescription] = useState(false);
  const [currentImage, setCurrentImage] = useState(null); 
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
      {itemsData.map((image, index) => (
        <div key={image.id} className={`overflow-hidden p-4 transform transition-transform duration-50 ${showDescription && currentImage === index ? 'scale-110 shadow-lg' : 'scale-99 shadow'}`} onMouseEnter={() => toggleDescription(index)} onMouseLeave={() => toggleDescription(index)}>
          <ImageContainer>
            <Image src={image.img} alt={`Image ${image.id + 1}`} />
            <ImageOverlay className={showDescription && currentImage === index ? 'overlay' : 'overlay'}>
              <Typography color="white" variant="h6" marginTop={"4rem"} gutterBottom>
                Sangeet & Mansi
                <div className='flex justify-center'>
                  <div className='w-[4rem] text-center bg-white py-[1px]'></div>
                </div>
              </Typography>
              <Typography variant="body1" sx={{fontWeight:"bold"}} color="white">
                01 December 2023
              </Typography>
              <Typography variant="body1" sx={{padding:2}} color="white">
                They struggled for 13 years to be together, because he was Irish and she was Punjabi, but through it all, she knew she wanted a wedding film by us. I met Anita & Colm in London, back in 2019 to discuss her story…
              </Typography>
              {/* Use Link for navigation */}
              <Link to={`/detail/${image.id}`} className="text-white text-decoration-none">
                <Button variant="text" sx={{paddingTop:"2px", paddingX:"0", borderRadius:"0", borderBottom:"solid", borderWidth:"1px", borderColor:"white", color:"white", marginBottom:"2rem"}} >
                  Learn More
                </Button>
              </Link>
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
