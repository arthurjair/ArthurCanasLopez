import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from './Navigationbar'

const HeaderSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[70vh] md:h-screen">
      {/* Blue container (now wraps nav + content) */}
      <div className="relative z-20 flex items-center justify-center py-12 md:py-0">
        <div className="min-w-[95vw] max-h-[90vh]  bg-blue-600 rounded-lg border-2 border-black-700 p-1 mt-5">
          {/* Navbar inside the container (moved to component) */}
          <Navigationbar />

          {/* Hero content */}
          <h1 className="text-6xl md:text-[6.5vw] font-figtree font-weight-bolder text-[#F7FD06] [-webkit-text-stroke:1.5px_#000000] flex justify-center">
            WHAT'S <br />GOOD!
          </h1>

          <div className="my-4 flex justify-center ">
            <Image
              src={assets.hero_image}
              alt="Hero Image"
              width={300}
              height={400}
              className="object-contain"
            />
            <h2 className="text-lg md:text-[3vw] font-figtree font-weight-bolder text-[#FF0000] [-webkit-text-stroke:1.5px_#FFFFFF] mt-2 flex text-center w-75">
              My name is ARTHUR and I create stuff
            </h2>
          </div>

          <p className="max-w-xl mx-auto text-lg md:text-xl font-inter text-white/90 mt-2 flex justify-center pb-5">
            Check out my work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;