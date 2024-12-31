import React from 'react'
import Image from  'next/image';

const Services = () => {
  return  <>
    <div className="container">
       {/* header section */}
      <div className="flex items-center justify-center">
        <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px] text-center px-4 pt-10">
        Our <span className="text-gray-400 underline">Services</span>
        </h1>
     </div>
      {/* cards section */}
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols md:grid-cols-3 gap-8 py-20">
        <div className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
         <img src = "assets/four.jpg" className="w-14 "/>
         <p className="text-xl font-semibold"> 24/ 7 Service</p>
         <p className="text-sm text-black/80 leading-relaxed"> We offer 24/7 services through our website for convenience, satisfaction and easy accessibility for users.</p>
        </div>
        <div className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
         <img src = "assets/five.png" className="w-14"/>
         <p className="text-xl font-semibold"> Fast Delivery</p>
         <p className="text-sm text-black/80 leading-relaxed"> We ensure your orders are delivered immmediately without any delays both on and off campus</p>
        </div>
        <div className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
         <img src = "assets/three.png" className="w-12 pt-5"/>
         <p className="text-xl font-semibold"> Convenient</p>
         <p className="text-sm text-black/80 leading-relaxed"> Our website is user friendly which makes shopping enjoyable and convenient for our users</p>
        </div>
        </div>
       </div>
    </div>
    </>
    
}

export default Services