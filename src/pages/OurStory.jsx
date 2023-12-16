import React,{ useState }  from 'react';
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../components/Footer"

const OurStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIndexChange = index => {
    setActiveIndex(index);
  };

  const imageUrls = [
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551890946-3e5446d3a71b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <>
    <div className='' style={{ position: 'relative', width: '100%' }}>
      <Carousel
       selectedItem={activeIndex}
       onChange={handleIndexChange}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={70}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={true}
        autoPlay={true}
        interval={2000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              title={label}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                zIndex: 2,
                transform: 'translateY(-50%)',
                padding: '8px',
                fontSize: '16px',
                backgroundColor: '#455a64',
                borderRadius:"3px",
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <ArrowBackIosIcon/>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              title={label}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                zIndex: 2,
                transform: 'translateY(-50%)',
                padding: '8px',
                fontSize: '16px',
                backgroundColor: '#455a64',
                borderRadius:"3px",
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
             <ArrowForwardIosIcon/>
            </button>
          )
        }
      >
       {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt={`Item ${index + 1}`}
            style={{
              filter: activeIndex === index ? 'none' : 'blur(6px)', // Apply blur only to inactive images
              width: '100%', // Adjust image width as needed
              height: 'auto', // Maintain aspect ratio
            }}
          />
        </div>
      ))}
      </Carousel>
    </div>
    <Footer/>
    </>
    
  );
};

export default OurStory;

