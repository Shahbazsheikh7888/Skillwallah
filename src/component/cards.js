import React from 'react';
import Single from '../assests/python.jpeg'
import Double from '../assests/React Cover.jpg'
import Triple from '../assests/javascript.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Python Course</h2>
              <p className='text-center text-4xl font-bold'>Rs.18,000</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic + Advance</p>
                  <p className='py-2 border-b mx-8'>Placement Asistance</p>
                  <p className='py-2 border-b mx-8'>Mock Interviews</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Enroll Now</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>React Course</h2>
              <p className='text-center text-4xl font-bold'>Rs.25,000</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic + Advance</p>
                  <p className='py-2 border-b mx-8'>Placement Asistance</p>
                  <p className='py-2 border-b mx-8'>Mock Interviews</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Enroll Now</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Javascript Course</h2>
              <p className='text-center text-4xl font-bold'>Rs.20,000</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic + Advance</p>
                  <p className='py-2 border-b mx-8'>Placement Asistance</p>
                  <p className='py-2 border-b mx-8'>Mock Interviews</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Enroll Now</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;