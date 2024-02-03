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
import DetailsPage from "../pages/DetailsPage"

import Image1 from "../assets/sumitCover.jpg"; // Import your images here
import Image2 from "../assets/sangeetCover.jpg";
import Image3 from "../assets/sumitCover.jpg";
import Image4 from "../assets/sangeetCover.jpg";
import Image5 from "../assets/sumitCover.jpg";
import Image6 from "../assets/sangeetCover.jpg";
import Image7 from "../assets/sumitCover.jpg";
import img1 from "../assets/prachi.JPG"


import video1 from "../assets/sumitGarima.mp4"
import video2 from "../assets/sangeetMansi.mp4"

const Routes = () => {
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

  const itemsData = [
    {
      img: Image1,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image2,
      videoUrl: video2,
      title: 'SANGEET & MANSI | THE NAKED EYE',
      date: 'Sangeet & Mansi | 2023',
      id:"sangeet-mansi",
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984913/sangit/b9rb8wut7in8fdrs6lfa.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984903/sangit/dpet7cfpvnaox5xiw8d9.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984900/sangit/dtxhrcfga9al5ax82itv.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984886/sangit/rpekkgyyf8rf4a9gssm7.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984878/sangit/jl2r7gz93v9grmhqrxzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984868/sangit/kleikuxdhjbb6zgmkqh8.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984837/sangit/wizyhn2busod4i15rqsw.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984823/sangit/lh0wl0ilycmmkwdsfs8j.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984804/sangit/ids2o1jczspqdu32meci.jpg",
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image3,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image4,
      videoUrl: video2,
      title: 'SANGEET & MANSI | THE NAKED EYE',
      date: 'Sangeet & Mansi | 2023',
      id:"sangeet-mansi",
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941019/nakedeye/r0ixnerou2ojrafin6nr.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941003/nakedeye/wvhhlfxgj6ewso4zhdgz.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940990/nakedeye/bs4kv7ld7ljewfnw94ng.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940927/nakedeye/rlgfkk14ptfu1os2wjsq.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940949/nakedeye/conzzqggo4tp7zjz9e2z.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image5,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image6,
      videoUrl: video2,
      title: 'SANGEET & MANSI | THE NAKED EYE',
      date: 'Sangeet & Mansi | 2023',
      id:"sangeet-mansi",
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941019/nakedeye/r0ixnerou2ojrafin6nr.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941003/nakedeye/wvhhlfxgj6ewso4zhdgz.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940990/nakedeye/bs4kv7ld7ljewfnw94ng.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940927/nakedeye/rlgfkk14ptfu1os2wjsq.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940949/nakedeye/conzzqggo4tp7zjz9e2z.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
    },
    {
      img: Image7,
      videoUrl: video1,
      title: 'SUMIT & GARIMA | THE NAKED EYE',
      date: 'Sumit & Garima | 2022',
      id:"sumit-garima",
      featured: true,
      imageUrls: [
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/cm7wag751zxaj4ccon39.jpg",
        'https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984376/sumit/n72sp8wpamje4jcgca7k.jpg',
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984373/sumit/axee22bvqqrenejfg4tj.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/j7ogyihivczd2rb8ms2s.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/brmbwc0k5b7r6bovscvt.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984371/sumit/wvwciz1vh3sizc1d9yzl.jpg",
        "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706984372/sumit/kvzlsyv2dlynhyre735p.jpg",
        
      ],
      details: "When two of our favourite designers finally get married, it’s bound to be ethereal. Kunal looked like a modern day Nawab, and Arpita was so happy to be married, she couldn’t help sway to her mandap. Now you know why I was jumping and hopping to capture her enter!"
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
      <Route path="/detail/:id" element={<DetailsPage items={itemsData}/>} />
      <Route path="/details/:id" element={<ItemDetailsPage items={itemData}/>}/>
    </Switch>
  );
};

export default Routes;
