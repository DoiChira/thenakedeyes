import React,{ useState }  from 'react';

import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIndexChange = index => {
    setActiveIndex(index);
  };
 
  const data = [
    {
      id: 1,
      title: 'Wedding Cinematography',
      subTitle: 'Dharshinee & Vishal | The Wedding Filmer',
      date: 'July 22, 2021',
      description:
        'We recently filmed this wedding during the pandemic and we wanted to share it with you, so you too can see how…',
      imageUrl:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/'
    },
    {
      id: 2,
      title: 'Wedding Cinematography',
      subTitle: 'Dharshinee & Vishal | The Wedding Filmer',
      date: 'July 22, 2021',
      description:
        'We recently filmed this wedding during the pandemic and we wanted to share it with you, so you too can see how…',
      imageUrl:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/'
    },
    {
      id: 3,
      title: 'Wedding Cinematography',
      subTitle: 'Dharshinee & Vishal | The Wedding Filmer',
      date: 'July 22, 2021',
      description:
        'We recently filmed this wedding during the pandemic and we wanted to share it with you, so you too can see how…',
      imageUrl:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/'
    }
    // Add more objects with similar structure if needed
  ];


  const WhatsAppLink = ({ phoneNumber, message }) => {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(message)}`;
    return (
        <a href={whatsappUrl} className='text-lg bg-green-500 p-2 text-white rounded-sm hover:bg-green-600 flex my-6 items-center justify-center align-middle' target="_blank" rel="noopener noreferrer">
          <button className='ml-2 '>BOOK NOW</button>
        </a>
    );
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
  return <>
   <div className='py-20 bg-slate-100' style={{ position: 'relative', width: '100%' }}>
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
          opacity: activeIndex === index ? 1 : 0, // Apply blur only to inactive images
          width: '100%', // Adjust image width as needed
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </div>
  ))}
  </Carousel>
   </div>   
   <div class="flex flex-col lg:flex-row">
  <div class="w-full lg:w-1/3 p-4">
    <div  className="max-w-sm mx-2 my-4 bg-white rounded-lg shadow-md overflow-hidden">
    <img className="w-full" src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="CardImage"/>
      <div className="p-4">
        <p className="text-xl font-semibold mb-2">{'Wedding Cinematography'}</p>
        <p className="text-sm text-gray-600">{'Dharshinee & Vishal | The Wedding Filmer'}</p>
        <p className="text-sm text-gray-600">{'July 22, 2021'}</p>
        <p className="text-sm text-gray-700 mt-2">{'We recently filmed this wedding during the pandemic and we wanted to share it with you, so you too can see how…'}</p>
        <WhatsAppLink phoneNumber={"9395642144"} message={` You, can you please inform me More`} />
      </div>
    </div>
    <div className="max-w-sm mx-2 mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <div className="space-y-2">
        <a
          href="/"
          className="block py-2 px-4 underline text-slate-600 font-bold rounded-md hover:text-slate-900 transition duration-300"
        >
          HOME
        </a>
        <a
          href="/our-story"
          className="block py-2 px-4 underline text-slate-600 font-bold rounded-md hover:text-slate-900 transition duration-300"
        >
          OUR STORY
        </a>
        <a
          href="/our-work"
          className="block py-2 px-4 underline text-slate-600 font-bold rounded-md hover:text-slate-900 transition duration-300"
        >
          OUR WORK
        </a>
        <a
          href="/our-crew"
          className="block py-2 px-4 underline text-slate-600 font-bold rounded-md hover:text-slate-900 transition duration-300"
        >
          OUR CREW
        </a>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-2/3 p-4">
  
  {
    data.map(item => (
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/3 p-4">
        <img className="w-full" src={item.imageUrl} alt="CardImage"/>
        </div>
        <div class="w-full lg:w-2/3 p-4">
          <div className="p-4">
            <p className="text-2xl font-semibold mb-2">{item.title}</p>
            <p className="text-xl text-gray-600">{item.subTitle}</p>
            <p className="text-sm text-gray-600">{item.date}</p>
            <p className="text-sm text-gray-700 mt-2">{`${item.description.slice(0, 500)}...`}</p>
            <a href="/" className="inline-block text-center mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">READ MORE</a>
          </div>
        </div>  
      </div>
    ))
  }
  </div>
  </div>
  </>
 
            ;
            };

export default Blog;