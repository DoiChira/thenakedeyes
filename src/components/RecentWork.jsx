import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RecentWork = () => {
  return (
    <div className="pt-[3rem]" style={{ position: 'relative', width: '100%' }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        // centerSlidePercentage={50}
      // Adjust the gap between items
        slidesPerView={1}
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
                left: '320px',
                zIndex: 2,
                transform: 'translateY(-50%)',
                padding: '5px',
                fontSize: '12px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              <ArrowBackIosIcon style={{ fontSize: '5  0px', color:"white" }}/>
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
                right: '360px',
                zIndex: 2,
                transform: 'translateY(-50%)',
                padding: '5px',
                fontSize: '20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
             <ArrowForwardIosIcon style={{ fontSize: '50px', color:"white" }}/>
            </button>
          )
        }
      >
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 1" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 2" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 3" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 1" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 2" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 3" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 1" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://images.unsplash.com/photo-1551890946-3e5446d3a71b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 2" />
        </div>
        <div style={{ paddingRight: '50px' }}>
          <img src="https://plus.unsplash.com/premium_photo-1661862397518-8e50332b6e97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Item 3" />
        </div>

      </Carousel>
    </div>
  );
};

export default RecentWork;

