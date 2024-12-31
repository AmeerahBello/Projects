import React from 'react';

 const NavbarLinks = [
   {
     id: 1,
     title: "Home",
     link: "#Hero",
   },
   {
     id: 2,
     title: "Service",
     link: "#Services",
   },
   {
     id: 3,
     title: "Contact",
     link: "#Footer",
   },
   {
     id: 4,
     title: "View cart",
     link: "#",
   },
   {
     id: 5,
     title: "FAQs",
     link: "#",
   },
 ]
 const Navbar = () => {
   return <>
     <div className= "py-4 container flex justify-between items-center">
       {/* Logo section */}
       <div className="flex items-center gap-1">
         <img src="assets/one.png" alt="" className="w-[70px]"/>
          <p className = "font-bold text-2xl">CampusConnect</p>
         <div></div>
       </div>
       {/* Link section */}
       <div className=" hidden md:block scroll-smooth">
         <ul className= "flex gap-3 xl:gap-7">           {NavbarLinks.map((link) => {
             return (
               <li key={link.id}>
                  <a href={link.link} className="hover:text-[#3380ff] uppercase text-sm xl:text-base">{link.title}
                  </a>
                  </li>
             );
           })}
         </ul>
       </div>
       {/* Button section */}
       <div>
         <button className="primary-btn">
           Sign in/Login
         </button>
       </div>
     </div>
   </>
  
 }

 export default Navbar

