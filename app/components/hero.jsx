import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from './Navigationbar'

const HeaderSection = () => {
  return (

    <section className="relative w-full  ">
      {/* Blue container (now wraps nav + content) */}
      <div className="relative z-20 flex items-center justify-center py-12 md:py-0">
        <div className="min-w-[95vw] max-h-[90vh]  bg-blue-600 rounded-lg border-2 border-black-700 p-1 mt-5">
          {/* Navbar inside the container (moved to component) */}
          <Navigationbar isInline={true} />

          {/* Hero content */}
          
          <div className="my-4 flex justify-center pt-20 text-center  ">
            <div>
               
               <Image
                 src={assets.hero_image}
                 alt="Hero Image"
                
                 className="object-contain "
                />
             </div>
            <div className="w-150">
              <h1 className="text-6xl lg:text-[8.5vw] font-figtree font-black text-[#F7FD06] [-webkit-text-stroke:2px_#000000] ">
                 WHAT'S <br />GOOD!
               </h1>
              <h2 className="text-lg lg:text-[3.5vw] font-figtree font-black text-[#FF0000] [-webkit-text-stroke:2px_#FFFFFF] mt-2 mb-2 flex  ">
                My name is ARTHUR and I create stuff.
              </h2>
              <p className="  text-lg lg:text-3xl font-inter font-black text-[#15E70D] [-webkit-text-stroke:1px_#AC09C9] ">
                Check out my work below!
              </p>
            </div>

            
          </div>

          <div className='flex justify-end '>
            <Image src={assets.hero_swag} alt="Swag" 
            width={75}
            
            />


          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;