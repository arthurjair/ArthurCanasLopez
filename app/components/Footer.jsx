import React from 'react'

export default function Skills() {
  return (
    <section className="">
        <div className="relative flex items-center justify-center ">

           <div className="w-full max-w-[95vw] bg-[#AC09C9] rounded-lg border-2 border-black-700 ">
              <div className="flex ">
                <img src="" alt="GoldFish" />
                 <h2 className="text-4xl font-bold text-white"> LET'S CHAT</h2>
                 <img src="" alt="Cat" />
              </div>
            </div>
        </div>

        <div className="relative flex items-center justify-center ">

           <div className="w-full max-w-[95vw] bg-[#15E70D] rounded-lg border-2 border-black-700 mb-5 ">
              <div className="flex">
                <ul>
                    <li className="text-lg text-white">INSTAGRAM</li>
                    <li className="text-lg text-white">LINKEDIN</li>
                    <li className="text-lg text-white">PINTEREST</li>
                    <li className="text-lg text-white">Collaboration With <span>Cua Studio</span> </li>

                </ul>
              </div>
            </div>
        </div>
    </section>
  );
}
