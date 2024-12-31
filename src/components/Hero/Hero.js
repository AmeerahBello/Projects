import React from 'react'
import Image from  'next/image';

const Hero = () => {
  return <>
  <div className="container">
     <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Text content section */}
      <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
      <h1 className="text-4xl xl:text-5xl font-bold">Everything You Need in One Place</h1>
      <p>We make school shopping easy, affordable, and stress-free.</p>
      <button className="primary-btn bg-gray-900 hover:bg-[#3380ff] duration-300">Shop Now</button>
      </div>
      {/* Hero Image section */}
      <div className="flex justify-center items-center">
      <img src="assets/two.jpg" alt="" className="w-[100%]md:w-[500px] xl:w-[600px]"/>
        </div>
     </div>
  </div>
  </>
  
}

export default Hero