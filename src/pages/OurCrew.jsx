import React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import img1 from "../assets/prachi.JPG"

const OurCrew = () => {
  const itemData = [
    {
      img: img1,
      title: 'Prachi Harlalka',
      author: 'Founder',
      id:"prachi-harlalka",
      featured: true,
      details: "Meet Prachi Harlalka, the visionary founder behind The Naked Eyes. With a passion for capturing the essence of love in its purest form, Prachi believes in a simple yet profound approach: to let love shine. As the driving force behind our photography journey, she goes beyond capturing mere images. Prachi is dedicated to unveiling the naked truth of love, ensuring that every moment is immortalized with authenticity and raw emotion."
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/jnn0GXFhOrhx0gTZmXliv2ZzkLjhYVTKW6NvEGBE.jpeg',
      title: 'Parag Medhi',
      author: 'Editor',
      id: 'parag-medhi',
      details:"Meet Parag Medhi, the artistic mind behind the scenes at The Naked Eyes. As our skilled Editor, Parag finds joy in the intricate process of editing. His passion lies in meticulously putting the pieces together, weaving a cohesive narrative, and sculpting each moment into its finest form. With a keen eye for detail and a commitment to perfection, Parag ensures that every frame tells a compelling story. Join us in appreciating the artistry of editing, where Parag transforms moments into timeless masterpieces, adding a touch of magic to every visual tale."
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/sT4SSCLHNIMiD0UpRJwjXHgdQxfyjY4xXabVNe9N.jpeg',
      title: 'Ashish',
      author: 'Photographer',
      id: 'Ashish',
    },
    
  ];
  return<>
   <div className='relative'>
  <div className="h-screen flex items-center justify-center">
    <img
      src="https://www.theweddingfilmer.com/images/crew/banner-4.jpg?v=2"
      alt="HeroImage"
      className="w-full h-full object-cover"
    />
  </div>
  <h2 className='absolute bottom-5 pb-4 text-white w-full text-center'>Meet the crew that is going to tell your story.</h2>
</div>
 <div className='container py-8'>
 <ImageList id='grid-container' sx={{ width: '100%', height: 500}} gap={20} cols={4} rowHeight={400}>
      {itemData.map((item) => (
        <Link to={`/details/${item.id}`} key={item.img} style={{ width: '100%' }}>
          <ImageListItem sx={{ position: 'relative', width: '100%' }}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ fontSize: '14px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 1)' }}
                  aria-label={`info about ${item.title}`}
                >
                  know more <ArrowRightIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
 </div>
  
  </>
  

};

export default OurCrew;