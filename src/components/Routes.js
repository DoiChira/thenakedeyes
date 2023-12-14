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

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/our-story" component={OurStory} /> */}
      <Route path="/our-work" component={OurWork} />
      <Route path="/our-crew" component={OurCrew} />
      <Route path="/blog" component={Blog} />
      <Route path="/workshops" component={Workshops} />
      <Route path="/contact" component={Contact} />
      <Route path="/faqs" component={FAQs} />
    </Switch>
  );
};

export default Routes;
