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

const Routes = () => {
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
    </Switch>
  );
};

export default Routes;
