import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const EmailButton = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('arthur2004jair@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.error('Failed to copy')
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center pb-10">
      <button
          onClick={handleCopy}
          className="relative block rounded-full bg-[#F7FD06] px-5 py-1 text-center text-[3vw] font-extrabold text-[#FF0000] transition-all duration-300 hover:-translate-x-0.5 hover:translate-y-0.5 lg:px-9 lg:py-2 lg:text-2xl mb-4"
        >
          {copied ? 'Copied to Clipboard!' : 'TAP TO COPY!'}
        </button>
      <div className="relative inline-block lg:pt-2">
        {/* Black bottom layer – offset */}
        <div className="absolute inset-0 -translate-x-1.5 translate-y-1.5 rounded-lg bg-black md:-translate-x-2.5 md:translate-y-3.5" />

        {/* White top layer – clickable */}
        <button
          onClick={handleCopy}
          className="relative block rounded-lg bg-white px-6 py-4 text-center font-bold text-black transition-all duration-300 hover:-translate-x-0.5 hover:translate-y-0.5 text-md md:px-5 md:py-5 md:text-3xl lg:px-9 lg:py-6 lg:text-5xl ">
          <h1>artuurocanasr@gmail.com</h1>
        </button>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <section>
      <div className="relative flex items-center justify-center ">
        <div className="w-full max-w-[95vw] bg-[#AC09C9] rounded-md border-2 border-black-700 ">
          <div className="flex relative pt-20 pb-15 lg:pb-15 md:pt-40 lg:pt-50 justify-center items-center gap-4">
            {/* give explicit width/height to Image */}
            <Image
              className="absolute z-0  left-0 z-3  lg:left-10 w-45 md:w-84 lg:w-100 xl:w-120"
              src={assets.goldfishes}
              alt="GoldFish"
              
            />
            <h1 className=" text-8xl text-center lg:text-[12vw] font-inter  font-extrabold text-[#F7FD06] [-webkit-text-stroke:2px_#000] lg:[-webkit-text-stroke:4px_#000] z-11 scale-y-150">
              LET'S CHAT
            </h1> 
            <Image
              className="absolute z-0 right-0 bottom-1/3 md:top-1/5 lg:top-1/6 lg:right-0 w-60 md:w-84 lg:w-100 xl:w-140"
              src={assets.chat}
              alt="Cat"
              
            />
          </div>

          <div className="relative flex flex-col items-center justify-center pb-2 lg:pb-10">
            <EmailButton />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center ">
        <div className="w-full max-w-[95vw] bg-[#15E70D] rounded-lg border-2 border-black-700 mb-5">
          <ul className="flex pt-2 pb-2 text-sm   ">
            <div className="md:flex md:flex-row md:gap-4 pl-5  lg:text-2xl"> 
              <li >
                <a
                  href="https://www.instagram.com/arthurcanaslopez/"
                  className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out   text-[#F7FD06]"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTA
                </a>
              </li>
              <li >
                <a
                  href="https://www.linkedin.com/in/arthur-cañas-11271b328"
                  className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out text-[#F7FD06]"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN
                </a>
              </li>
              <li >
                <a
                  href="https://pin.it/2RArftI6v"
                  className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out text-[#F7FD06]"
                  target="_blank"
                  rel="noreferrer"
                >
                  PINTEREST
                </a>
              </li>
            </div>

            <li className="ml-auto pr-5 w-40 md:w-60 lg:w-100 text-sm text-right lg:text-2xl">
              <p className=" text-[#F7FD06] ">
                Collaboration With <span className="underline ">Cua Studio</span>
              </p>
            </li>
          </ul>

          

        </div>
      </div>
    </section>
  )
}
