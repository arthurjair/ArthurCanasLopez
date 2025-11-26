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
          className="relative block rounded-full bg-[#F7FD06] px-4 py-2 text-center font-extrabold text-[#FF0000] transition-all duration-300 hover:-translate-x-0.5 hover:translate-y-0.5 lg:px-9 lg:py-2 lg:text-2xl mb-4"
        >
          {copied ? 'Copied to Clipboard!' : 'TAP TO COPY!'}
        </button>
      <div className="relative inline-block">
        {/* Black bottom layer – offset */}
        <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-black md:-translate-x-2.5 md:translate-y-3.5" />

        {/* White top layer – clickable */}
        <button
          onClick={handleCopy}
          className="relative block rounded-2xl bg-white px-8 py-5 text-center font-bold text-black transition-all duration-300 hover:-translate-x-0.5 hover:translate-y-0.5 md:px-10 md:py-6 md:text-5xl">
          <h1>arthur2004jair@gmail.com</h1>
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
          <div className="flex relative p-20 lg:pb-15 lg:pt-30 justify-center items-center gap-4">
            {/* give explicit width/height to Image */}
            <Image
              className="absolute z-0 left-10 lg:left-10"
              src={assets.goldfishes}
              alt="GoldFish"
              width={400}
              height={200}
            />
            <h1 className=" text-2xl lg:text-[12vw]  font-bold text-[#F7FD06] [-webkit-text-stroke:4px_#000] z-2 scale-y-150">
              LET'S CHAT
            </h1> 
            <Image
              className="absolute z-1 right-10 lg:right-0"
              src={assets.chat}
              alt="Cat"
              width={500}
              height={240}
            />
          </div>

          <div className="relative flex flex-col items-center justify-center pb-10">
            <EmailButton />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center ">
        <div className="w-full max-w-[95vw] bg-[#15E70D] rounded-lg border-2 border-black-700 mb-5">
          <ul className="flex pt-2 pb-2 ">
            <div className="flex flex-row gap-4 pl-5 ">
              <li className="text-xl text-white">
                <a
                  href="https://www.instagram.com/arthurcanaslopez/"
                  className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out   text-[#F7FD06]"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTA
                </a>
              </li>
              <li className="text-xl text-white">
                <a
                  href="https://www.linkedin.com/in/arthur-cañas-11271b328"
                  className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out text-[#F7FD06]"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN
                </a>
              </li>
              <li className="text-xl text-white">
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

            <li className="ml-auto pr-5">
              <p className="text-2xl md:text-1xl text-[#F7FD06] ">
                Collaboration With <span className="underline">Cua Studio</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
