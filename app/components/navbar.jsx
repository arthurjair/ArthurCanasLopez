import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const navbar = () => {

  const sidemenuRef = useRef();

  const openMenu = () => {
    sidemenuRef.current.style.transform = "translateX(-16rem)";
  }

  const closeMenu = () => {
    sidemenuRef.current.style.transform = "translateX(16rem)";
  }


  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        
        <a href="/">
            <Image src={assets.logo_portfolio} alt='Logo' className='w-30 cursor-pointer mr-14' /> 
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-ful  py-3'>
            <li className='relative overflow-visible'>
            <a href="/" className='group relative inline-flex items-center cursor-pointer select-none' aria-label='Home'>
              {/* black bottom card (peeks out to the left) */}
              <div className='absolute -left-2  top-1 z-0 bg-black rounded-md px-4 py-2 flex items-center gap-3'>
                {/* invisible content to match width of white card */}
                <span className='opacity-0 flex items-center gap-3'>
                  <Image src={assets.icon_home} alt='Home icon' width={28} height={28} />
                  <span className='text-sm font-medium'>HOME</span>
                </span>
              </div>

              {/* white top card (above black card) */}
              <div className='relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1'>
                <Image src={assets.icon_home} alt='Home icon' width={28} height={28} />
                <span className='text-sm font-medium'>HOME</span>
              </div>
            </a>
          </li> 
            <li className='relative overflow-visible'>
            <a href="/projects" className='group relative inline-flex items-center cursor-pointer select-none' aria-label='Projects'>
              <div className='absolute -left-2 top-1 z-0 bg-black rounded-md px-4 py-2 flex items-center gap-3'>
                <span className='opacity-0 flex items-center gap-3'>
                  <Image src={assets.icon_projects} alt='Projects icon' width={28} height={28} />
                  <span className='text-sm font-medium'>PROJECTS</span>
                </span>
              </div>

              <div className='relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1 '>
                <Image src={assets.icon_projects} alt='Projects icon' width={28} height={28} />
                <span className='text-sm font-medium'>PROJECTS</span>
              </div>
            </a>
          </li>
            <li className='relative overflow-visible'>
            <a href="/about" className='group relative inline-flex items-center cursor-pointer select-none' aria-label='About'>
              <div className='absolute -left-2 top-1 z-0 bg-black rounded-md px-7 py-2 flex items-center gap-3'>
                <span className='opacity-0 flex items-center gap-3'>
                  <Image src={assets.icon_aboutme} alt='About icon' width={28} height={28} />
                  <span className='text-sm font-medium'>ABOUT</span>
                </span>
              </div>

              <div className='relative z-10 bg-white rounded-md px-4 py-2 flex items-center gap-3 transform transition-all duration-150 group-active:translate-y-1'>
                <Image src={assets.icon_aboutme} alt='About icon' width={28} height={28} />
                <span className='text-sm font-medium'>ABOUT ME</span>
              </div>
            </a>
          </li>
        </ul>

        <div className='md:hidden' onClick={openMenu}>
            <button>
                <Image src={assets.menu_burger} alt='Menu' width={28} height={28} className='cursor-pointer' />
            </button>
        </div>

        {/* Mobile Menu */}

        <ul ref={sidemenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.menu_close} alt='Close menu' width={28} height={28} className='cursor-pointer w-5' />
          </div>


          <li> <Image src={assets.icon_home} alt='Home icon' width={28} height={28} /> <a onClick={closeMenu} href="/">HOME</a></li>
          <li> <Image src={assets.icon_projects} alt='Projects icon' width={28} height={28} /> <a onClick={closeMenu} href="/projects">PROJECTS</a></li>
          <li> <Image src={assets.icon_aboutme} alt='About icon' width={28} height={28} /> <a onClick={closeMenu} href="/about">ABOUT ME</a></li>
        </ul>

    </nav>
    </>
  )
}

export default navbar