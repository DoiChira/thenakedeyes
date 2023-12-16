import React from 'react';
import { Grid, Typography, Paper, Avatar } from '@mui/material';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Testimonial = () => {
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
    <div className="container mx-auto py-8">
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
  </div>
  );
};

export default Testimonial;
