import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const HeaderSection = () => {
  const sidemenuRef = useRef();

  const openMenu = () => {
    sidemenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sidemenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <section className="relative w-full h-screen">
       

      {/* Blue container (now wraps nav + content) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="min-w-[95vw] min-h-[90vh]  bg-blue-600 rounded-lg p-1  ">


          {/* Navbar inside the container */}
          <nav className="w-full px-2  flex items-center justify-between ">
            <a href="/">
              <Image
                src={assets.logo_portfolio}
                alt="Logo"
                
                className=" w-[10vw] cursor-pointer mr-14"
              />
            </a>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-ful py-3">
              {/* HOME */}
              <li className="relative overflow-visible">
                <a
                  href="/"
                  className="group relative inline-flex items-center cursor-pointer select-none"
                  aria-label="Home"
                >
                  {/* black bottom card */}
                  <div className="absolute -left-2 top-1 z-0 bg-black rounded-md px-4 py-2 flex items-center gap-3">
                    <span className="opacity-0 flex items-center gap-3">
                      <Image src={assets.icon_home} alt="Home icon" width={28} height={28} />
                      <span className="text-sm font-medium">HOME</span>
                    </span>
                  </div>

                  {/* white top card */}
                  <div className="relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1">
                    <Image src={assets.icon_home} alt="Home icon" width={28} height={28} />
                    <span className="text-sm font-medium">HOME</span>
                  </div>
                </a>
              </li>

              {/* PROJECTS */}
              <li className="relative overflow-visible">
                <a
                  href="/projects"
                  className="group relative inline-flex items-center cursor-pointer select-none"
                  aria-label="Projects"
                >
                  <div className="absolute -left-2 top-1 z-0 bg-black rounded-md px-4 py-2 flex items-center gap-3">
                    <span className="opacity-0 flex items-center gap-3">
                      <Image src={assets.icon_projects} alt="Projects icon" width={28} height={28} />
                      <span className="text-sm font-medium">PROJECTS</span>
                    </span>
                  </div>

                  <div className="relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1">
                    <Image src={assets.icon_projects} alt="Projects icon" width={28} height={28} />
                    <span className="text-sm font-medium">PROJECTS</span>
                  </div>
                </a>
              </li>

              {/* ABOUT */}
              <li className="relative overflow-visible">
                <a
                  href="/about"
                  className="group relative inline-flex items-center cursor-pointer select-none"
                  aria-label="About"
                >
                  <div className="absolute -left-2 top-1 z-0 bg-black rounded-md px-7 py-2 flex items-center gap-3">
                    <span className="opacity-0 flex items-center gap-3">
                      <Image src={assets.icon_aboutme} alt="About icon" width={28} height={28} />
                      <span className="text-sm font-medium">ABOUT</span>
                    </span>
                  </div>

                  <div className="relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1">
                    <Image src={assets.icon_aboutme} alt="About icon" width={28} height={28} />
                    <span className="text-sm font-medium">ABOUT ME</span>
                  </div>
                </a>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden" onClick={openMenu}>
              <button>
                <Image
                  src={assets.menu_burger}
                  alt="Menu"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <ul
            ref={sidemenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-100 border border-black-200 rounded-ms transition duration-500"
          >
            <div className="absolute right-6 top-10" onClick={closeMenu}>
              <Image
                src={assets.menu_close}
                alt="Close menu"
                width={28}
                height={28}
                className="cursor-pointer w-5"
              />
            </div>

            <li>
              <Image src={assets.icon_home} alt="Home icon" width={28} height={28} />{" "}
              <a onClick={closeMenu} href="/">
                HOME
              </a>
            </li>
            <li>
              <Image src={assets.icon_projects} alt="Projects icon" width={28} height={28} />{" "}
              <a onClick={closeMenu} href="/projects">
                PROJECTS
              </a>
            </li>
            <li>
              <Image src={assets.icon_aboutme} alt="About icon" width={28} height={28} />{" "}
              <a onClick={closeMenu} href="/about">
                ABOUT ME
              </a>
            </li>
          </ul>

          {/* Hero content */}
          <h1 className="text-6xl md:text-8xl mb-3 font-inter text-white flex justify-center">
            WHAT'S GOOD!
          </h1>

          <div className="my-4 flex justify-center ">
            <Image
              src={assets.hero_image}
              alt="Hero Image"
              width={300}
              height={400}
              className="object-contain"
            />
            <h2 className="text-lg md:text-5xl font-inter text-white mt-2 flex text-center w-75 text-colo">
            My name is Arthur and I create stuff
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

