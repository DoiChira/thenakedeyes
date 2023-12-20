// Routes.js
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

// Import your components for each page
import Home from '../pages/Home';
// import OurStory from '../pages/OurStory';
import OurWork from '../pages/OurWork';
import OurCrew from '../pages/OurCrew';
import Blog from '../pages/Blog';
import Workshops from '../pages/Workshops';
import Contact from '../pages/Contact';
import FAQs from '../pages/FAQs';
import OurStory from '../pages/OurStory'
import ItemDetailsPage from "../pages/ItemDetailsPage"

const Routes = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

  return (
    <Switch>
      <Route path="/" exact element={<Home/>} />
      <Route path="/our-story" element={<OurStory/>} />
      <Route path="/our-work" element={<OurWork/>} />
      <Route path="/our-crew" element={<OurCrew/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/workshops" element={<Workshops/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/faqs" element={<FAQs/>} />
      <Route path="/details/:id" element={<ItemDetailsPage items={itemData}/>}/>
    </Switch>
  );
};

export default Routes;
