import React from 'react'
import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer"

const page = () => {
  return ( 
  <main> 
   <Navbar/>
   <Hero/>
   <Services/>
   <Footer/>
  </main>
  );
};

export default page