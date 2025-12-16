"use client"
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const Navigationbar = ({ isInline = false }) => {
  const sidemenuRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  // menu open/close helpers
  const openMenu = () => {
    if (sidemenuRef.current) sidemenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sidemenuRef.current) sidemenuRef.current.style.transform = "translateX(16rem)";
  };

  // listen to scroll and toggle a small move-up class
  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const shouldBeScrolled = y > 8; // tweak threshold
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(shouldBeScrolled));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Keep inline nav relative on small screens, fixed on md+
  const navClass = isInline
    ? `relative md:fixed md:left-1/2 md:transform md:-translate-x-1/2 md:w-full lg:w-11/12  lg:max-w-7xl md:z-50 md:transition-all md:duration-200 ${scrolled ? "md:top-0" : "md:top-8"}`
    : `fixed w-full z-50 transition-transform duration-200 ${scrolled ? "-translate-y-6" : "translate-y-0"}`;

  return (
    <>
      <nav className={navClass}>
        {/* improved inner container so nav centers and respects parent */}
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* logo (left) */}
          <Link href="/">
            <Image
              src={assets.logo_portfolio}
              alt="Logo"
              
              className="w-15 md:w-25 lg:w-30 cursor-pointer mr-4 "
            />
          </Link>

          {/* nav items (right) */}
          <ul className="hidden md:flex  items-center md:gap-3 md:mr-4 lg:gap-8 py-3 p-2 ">
            <li className="relative overflow-visible">
              <Link
                href="/"
                className="group relative inline-flex items-center cursor-pointer select-none"
                aria-label="Home"
              >
                <div className="absolute -left-2 top-1 z-0 bg-black rounded-md px-4 py-2 flex items-center gap-3">
                  <span className="opacity-0 flex items-center gap-3">
                    <Image src={assets.icon_home} alt="Home icon" className="md:w-5 md:h-7" />
                    <span className="text-sm font-medium">HOME</span>
                  </span>
                </div>

                <div className="relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1">
                  <Image src={assets.icon_home} alt="Home icon" className="md:w-5 md:h-7" />
                  <span className="text-sm font-medium">HOME</span>
                </div>
              </Link>
            </li>

            <li className="relative overflow-visible">
              <Link
                href="/projects"
                className="group relative inline-flex items-center cursor-pointer select-none"
                aria-label="Projects"
              >
                <div className="absolute -left-2 top-1 z-0 bg-black rounded-md px-4 py-2 flex items-center gap-3">
                  <span className="opacity-0 flex items-center gap-3">
                    <Image src={assets.icon_projects} alt="Projects icon" className="md:w-5 md:h-7" />
                    <span className="text-sm font-medium">PROJECTS</span>
                  </span>
                </div>

                <div className="relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1">
                  <Image src={assets.icon_projects} alt="Projects icon" className="md:w-5 md:h-7" />
                  <span className="text-sm font-medium">PROJECTS</span>
                </div>
              </Link>
            </li>

            <li className="relative overflow-visible">
              <Link
                href="/about"
                className="group relative inline-flex items-center cursor-pointer select-none"
                aria-label="About"
              >
                <div className="absolute -left-2 top-1 z-0 bg-black rounded-md px-7 py-2 flex items-center gap-3">
                  <span className="opacity-0 flex items-center gap-3">
                    <Image src={assets.icon_aboutme} alt="About icon" className="md:w-5 md:h-7 " />
                    <span className="text-sm font-medium">ABOUT</span>
                  </span>
                </div>

                <div className="relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1">
                  <Image src={assets.icon_aboutme} alt="About icon" className="md:w-5 md:h-7"  />
                  <span className="text-sm font-medium">ABOUT ME</span>
                </div>
              </Link>
            </li>
          </ul>

          {/* mobile hamburger */}
          <div className="md:hidden">
            <button onClick={openMenu} aria-label="Open menu">
              <Image src={assets.menu_burger} alt="Menu" width={28} height={28} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        ref={sidemenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-6 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500"
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

        <li className="flex items-center gap-3">
          <Image src={assets.icon_home} alt="Home icon" width={28} height={28} />
          <Link onClick={closeMenu} href="/">
            HOME
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Image src={assets.icon_projects} alt="Projects icon" width={28} height={28} />
          <Link onClick={closeMenu} href="/projects">
            PROJECTS
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Image src={assets.icon_aboutme} alt="About icon" width={28} height={28} />
          <Link onClick={closeMenu} href="/about">
            ABOUT ME
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigationbar;
