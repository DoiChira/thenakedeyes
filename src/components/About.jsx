import React from "react";
// import HeroVideo from "../assets/pixel.mp4"


const About = () => {
  return (
    <section className='  flex flex-col md:flex-row'>
  <div className="md:w-2/4 relative mb-10 flex justify-center items-center">
    <img
      src={"https://images.unsplash.com/photo-1626021483450-609c9808b8ab?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      width={100}
      height={100}
      alt="Person"
      className="w-4/5 h-full object-cover rounded"
    />
    <img
      src={"https://images.unsplash.com/photo-1626021483450-609c9808b8ab?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      width={100}
      height={100}
      alt="Person"
      className="rounded absolute w-3/5 right-5 top-2/4"
    />
  </div>
  <div className="md:w-2/4 p-4">
    <h1 className="text-3xl text-[#18568C] font-bold mb-4">About Us</h1>
    <h1 className="text-3xl w-fit md:text-5xl font-bold">
      We are qualified &amp; have years of experience in this field
    </h1>
    <p className="py-8">
    Dedicated to more than just photography and videography, we are The Naked Eyes, a collective of skilled storytellers. Our expertise lies in immortalizing unspoken emotions and treasured moments, encapsulating the very essence of love in its most unadulterated forms.
    </p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      More About Us
    </button>
  </div>
     </section>

  
  );
};

export default About;
