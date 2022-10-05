import React from "react";
import Laptop from "../assests/Laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">COURSES DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Learn the IT skills Today !
          </h1>
          <p>
            Discover the latest coding language and try it out in your spare
            time – get a bit of experience. Discover a new software and become
            familiar with it, especially if you believe it will make the
            difference in the future. Get out of your comfort zone and keep on
            top of new developments.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
