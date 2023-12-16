import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const OurCrew = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Vishal Punjabi',
      author: 'Founder & Director',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/jnn0GXFhOrhx0gTZmXliv2ZzkLjhYVTKW6NvEGBE.jpeg',
      title: 'Abhijit Dutta',
      author: 'Cinematographer',
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/sT4SSCLHNIMiD0UpRJwjXHgdQxfyjY4xXabVNe9N.jpeg',
      title: 'Ashish',
      author: '@helloimnik',
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/dT51x2PzEvUs85Zww9o7MERpfmEaAsvZklspPrli.jpeg',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/XHamah3Pdo5ZX5ZYjnpdcRXrJ7KwijxCs8J4qUg0.jpeg',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/SNEth1ZKNdmTqKKwffzbgbMZNAcVhlAMPTlKIecA.jpeg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://www.theweddingfilmer.com//images/crew/profile_image/SNEth1ZKNdmTqKKwffzbgbMZNAcVhlAMPTlKIecA.jpeg',
      title: 'Fern',
      author: '@katie_wasserman',
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
 <ImageList sx={{ width: "full", height: 500 }} gap={20} cols={4} rowHeight={400}>
     
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ position: "relative" }}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{fontSize:"14px", fontWeight:"bold", color: 'rgba(255, 255, 255, 1)' }}
                aria-label={`info about ${item.title}`}
              >
               know more <ArrowRightIcon/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
  </ImageList>
 </div>
  
  </>
  

};

export default OurCrew;