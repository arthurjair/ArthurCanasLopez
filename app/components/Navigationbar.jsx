import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navigationbar = ({ isInline = false }) => {
  const sidemenuRef = useRef();

  const openMenu = () => {
    if (sidemenuRef.current) sidemenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sidemenuRef.current) sidemenuRef.current.style.transform = "translateX(16rem)";
  };

  // when isInline is true we want the nav fixed but constrained to the centered container
  const navClass = isInline
    ? "fixed top-6 left-1/2 transform -translate-x-1/2 w-11/11 max-w-9xl z-50"
    : "fixed w-full z-50";

  return (
    <>
      <nav className={navClass}>
        <div className="mx-auto w-11/12 flex items-center justify-between">
          {/* logo (left) */}
          <a href="/">
            <Image
              src={assets.logo_portfolio}
              alt="Logo"
              width={50}
              height={32}
              className="w-[8vw] cursor-pointer mr-14"
            />
          </a>

          {/* nav items (right) */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 py-3">
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

          {/* mobile toggle (still in the same row) */}
          <div className="md:hidden" onClick={openMenu}>
            <button>
              <Image src={assets.menu_burger} alt="Menu" width={28} height={28} className="cursor-pointer" />
            </button>
          </div>
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
    </>
  );
};

export default Navigationbar;