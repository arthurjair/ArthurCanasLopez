import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from './Navigationbar'

const HeaderSection = () => {
  return (

    <section className="relative w-full  ">
      {/* Blue container (now wraps nav + content) */}
      <div className="relative z-20 flex items-center justify-center py-12 md:py-0">
        <div className=" w-full max-w-[95vw]  bg-blue-600 rounded-lg border-2 border-black-700 p-1 mt-5">
          {/* Navbar inside the container (moved to component) */}
          <Navigationbar isInline={true} />

          {/* Hero content */}
          
          <div className="  justify-center  text-center mt-10 md:mt-30  ">
            
            <div className="grid md:grid-cols-2 p-2 ">
              <div>
               <h1 className=" md:mt-20 md:mb-10 mb-5  text-7xl scale-y-150  md:text-8xl lg:text-[12vw] font-figtree font-black text-[#F7FD06] [-webkit-text-stroke:1.5px_#000000] md:[-webkit-text-stroke:2px_#000000] lg:[-webkit-text-stroke:4px_#000000]  ">
                 WHAT'S <br />GOOD!
               </h1>
               
              </div>
              <div>
               
               <Image
                 src={assets.arthur_popout}
                 alt="Hero Image"
                 className="object-contain w-70 md:w-80 lg:w-135 mx-auto "
                />
                <h2 className="text-3xl p-5 lg:text-6xl font-figtree font-extrabold text-[#FF0000] [-webkit-text-stroke:1px_#FFFFFF] lg:[-webkit-text-stroke:2px_#FFFFFF] ">
                 My name is ARTHUR and I make stuff.
                </h2>
               <p className="  text-md lg:text-3xl font-inter font-black text-[#15E70D] [-webkit-text-stroke:.5px_#AC09C9] lg:[-webkit-text-stroke:1px_#AC09C9]  ">
                Check out my work below!
               </p>
                
             </div>
              
            </div>

            
          </div>

          <div className='flex justify-end '>
            <Image src={assets.hero_swag} alt="Swag" 
              className="w-12 md:w-15 lg:w-25 pointer-events-none  "
            
            
            />


          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;