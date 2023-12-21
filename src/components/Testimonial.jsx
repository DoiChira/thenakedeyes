import React from 'react';
import { Grid, Typography, Paper, Avatar } from '@mui/material';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Testimonial = () => {
  const WhatsAppLink = ({ phoneNumber, message }) => {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(message)}`;
    return (
        <a href={whatsappUrl} className='text-lg inline-block bg-green-500 p-2 text-white rounded-sm hover:bg-green-600 my-6 items-center justify-center align-middle' target="_blank" rel="noopener noreferrer">
       <button className='ml-2 '>BOOK US NOW</button>
        </a>
    );
};

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Amazing service! I highly recommend this company.',
      profileImg: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL here
    },
    {
      id: 2,
      name: 'John Doe',
      message: 'Amazing service! I highly recommend this company.',
      profileImg: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL here
    },
    {
      id: 3,
      name: 'John Doe',
      message: 'Amazing service! I highly recommend this company.',
      profileImg: 'https://images.unsplash.com/photo-1654027776459-e8ff34061f36?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL here
    },
    {
      id: 4,
      name: 'John Doe',
      message: 'Amazing service! I highly recommend this company.',
      profileImg: 'https://images.unsplash.com/photo-1613721881115-bc588d67418c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add image URL here
    },
    // Add more testimonials here...
  ];

  return (
   <section className='service-testimonial pt-6'>
     <div className="container  mx-auto py-8">
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((testimonial) => (
        <Grid item xs={12} sm={6} md={3} key={testimonial.id} className="flex justify-center">
          <Paper className="p-6 flex flex-col items-center">
            <Avatar alt={testimonial.name} src={testimonial.profileImg} sx={{ width: 140, height: 140, borderRadius: '50%' }} />
            <Typography variant="h6" gutterBottom className="mt-4">
              {testimonial.name}
            </Typography>
            <Typography variant="body1" align="center">
              {testimonial.message}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
    <div className='mt-10'>
      <h2 className='font-extrabold text-2xl text-slate-200'>Ready to Capture Your Moments with Timeless Elegance?</h2>
      <p className='text-xl mt-2 text-slate-200'>Contact us today to discuss your vision, and let's create magic together. Your moments, our expertise – a perfect blend for extraordinary memories.</p>
    <WhatsAppLink phoneNumber={"9395642144"} message={` You, can you please inform me More`} />
    </div>
  </div>
   </section>
  );
};

export default Testimonial;
