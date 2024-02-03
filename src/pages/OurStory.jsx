import React from 'react';


const OurStory = () => {
 

  return (
    <section className='mt-[6rem]'>
    <div className='mt-[2rem] container flex flex-col md:flex-row'>
    <div className="md:w-2/4 relative mb-2 flex justify-center align-middle ">
      <img
        src={ "https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940990/nakedeye/bs4kv7ld7ljewfnw94ng.jpg"}
        width={100}
        height={100}
        alt="Person"
        className="w-full h-full object-cover rounded"
      />
    </div>
    <div className="md:w-2/4 pt-10 px-4">
      <h1 className="text-3xl text-[#18568C] font-bold mb-4">OUR VISION</h1>
      <p className="py-2 text-xl">
      At The Naked Eyes, we embark on a journey of excellence where we recognize the profound importance of affordability. Our commitment lies in seamlessly merging quality with accessibility. Whether it's a grand wedding celebration, a corporate product shoot, or any significant event, we invite you to entrust us with the task of capturing your moments and treasures. Through our lens, we enable you to perpetually relive these cherished memories.
      </p>
    </div>
    </div>
    <div className='mt-[2rem] container flex flex-col md:flex-row'>
    <div className="md:w-2/4 pt-4 pr-4">
      <h1 className="text-3xl text-[#18568C] font-bold mb-4">THE STORY</h1>
      <p className="py-2 text-xl">
      The genesis of The Naked Eyes traces back to my roots as a freelancer and photojournalist. After years of freelancing in Hyderabad, the winds of change brought me to my hometown, Mankajor, during the onset of COVID. It was during my time engaged in social work that I recognized the untapped potential in the Guwahati market. Fueled by both passion and a keen understanding of business, I made the bold decision to transition from freelancer to entrepreneur.
      </p >
      <p className=" text-xl">Taking a leap of faith, I flew from Hyderabad to Guwahati, secured a 3BHK flat, converted my living space into a studio, and birthed my own company – The Naked Eyes. While continuing my pursuits in journalism, I expanded the scope of our services beyond weddings to include corporate projects, product shoots, and all facets of photography.
      </p>
    </div>
    <div className="md:w-2/4 relative mb-2 flex justify-center items-center">
      <img
        src={"https://res.cloudinary.com/dlicwfgtq/image/upload/v1706940965/nakedeye/psqnsijitwrisvup2dko.jpg"}
        width={100}
        height={100}
        alt="Person"
        className="w-full h-full object-cover rounded"
      />
    </div>
    </div>
    <div className='mt-[2rem] container flex flex-col md:flex-row'>
    <div className="md:w-2/4 relative mb-2 flex justify-center align-middle ">
      <img
        src={"https://res.cloudinary.com/dlicwfgtq/image/upload/v1706941019/nakedeye/r0ixnerou2ojrafin6nr.jpg"}
        width={100}
        height={100}
        alt="Person"
        className="w-full h-full object-cover rounded"
      />
    </div>
    <div className="md:w-2/4 pt-10 px-4">
      <h1 className="text-3xl text-[#18568C] font-bold mb-4">WHY "THE NAKED EYES"?</h1>
      <p className="py-2 text-xl">
      Having been a photojournalist, I firmly believed that a picture should not only be aesthetically pleasing but also convey raw, unfiltered emotion. The name "The Naked Eyes" encapsulates the essence of capturing moments without the embellishments, revealing the unvarnished reality of every bride, parent, and individual at an event. Our goal is to showcase the genuine emotions and diverse perspectives that make each occasion unique, going beyond the surface to capture the authenticity of every moment.
      </p>
    </div>
    </div>
    </section>
  );
};

export default OurStory;
