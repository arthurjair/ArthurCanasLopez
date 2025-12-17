'use client';
import Footer from '../components/Footer';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from '../components/Navigationbar'


export default function Projects() {

  

  return (
    <>
       <section className="relative w-full  ">
          {/* Blue container (now wraps nav + content) */}
         <div className="relative z-20 flex items-center justify-center md:py-0">
             <div className="w-full max-w-[95vw]  bg-[#E34C9D] rounded-lg border-2 border-black-700 p-1 mt-5">
                 {/* Navbar inside the container (moved to component) */}
                   <Navigationbar isInline={true} />

                  {/* About Me content */}
                  <div>
                    <h1 className='font-inter text-4xl font-black md:text-5xl lg:text-9xl text-[#F7FD06]  text-center pt-30 scale-y-150'> UNDER CONSTRUCTION!</h1>
                    <div>
                      <Image
                        src={assets.construction}
                        alt="Under Construction"
                        className=" object-contain w-50 md:w-70 lg:w-100 mx-auto pb-10"
                      />
                    </div>
                  </div>

                 
          
                 
             </div>
            </div>
        </section>
      <Footer />
    </>
  );
}
