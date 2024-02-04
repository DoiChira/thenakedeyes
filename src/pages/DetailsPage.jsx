import * as React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



function DetailsPage({ items }) {
  const { id } = useParams(); // Get the title from the URL parameter
  const selectedItem = items.find(item => item.id === id);


  if (!selectedItem) {
    return <div>Item not found</div>; // Handle case where item is not found
  }

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

  return (
    <div class="mx-auto test max-w-[70rem]  bg-white rounded-xl shadow-md overflow-hidden">
      <div  style={{}} className='py-2 px-2 '>
            <VideoContainer>
              <Video autoPlay controls muted>
                <source src={selectedItem.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            </VideoContainer>
          </div>
      <div class="p-12 slide-up">
        <h2 class="text-3xl text-center font-bold mb-2">{selectedItem.title}</h2>
        <p class="text-gray-600 text-center text-2xl mb-4">{selectedItem.date}</p>
        <p class="text-gray-700">{selectedItem.details}</p>
      </div>
      <ImageList id="grid-container" cols={3} gap={8}>
  {selectedItem.imageUrls.map((item) => (
    <ImageListItem key={item.img} className="group relative overflow-hidden">
      <img
        className="transition-transform transform group-hover:scale-110"
        srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${item}?w=161&fit=crop&auto=format`}
        alt="weddingImage"
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

      
    </div>
  );
}

export default DetailsPage;
