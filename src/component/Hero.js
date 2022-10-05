import React from 'react';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 text-lg'  >
          Welcome to the world of IT skills
        </p>
        <h1 className='md:text-7xl sm:text-4xl text-4xl font-bold md:py-6'>
          Start Your career with us !
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-3xl text-xl  font-style: italic font-bold py-4'>
            Learn most demanded and highly paid IT skills through our courses.
          </p>
          
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Learn Python, Javascript and React with hands on experience on industry level projects</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;


