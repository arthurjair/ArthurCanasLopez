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

           <div className="w-full max-w-[95vw] bg-[#15E70D] rounded-lg border-2 border-black-700 mb-5">
              
                <ul className='flex pt-2 pb-2 '>
                    <div className='flex flex-row gap-4 pl-5 '>
                     <li className="text-lg text-white"><a href ="https://www.instagram.com/arthurcanaslopez/" className='inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out' target="_blank">INSTA</a></li>
                     <li className="text-lg text-white"><a href="https://www.linkedin.com/in/arthur-cañas-11271b328" className='inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out' target="_blank">LINKEDIN</a></li>
                     <li className="text-lg text-white"><a href="https://pin.it/2RArftI6v" className='inline-block hover:scale-110 hover:-translate-y-1 hover:text-blue-600 transition-all duration-300 ease-out' target="_blank">PINTEREST</a></li>
                    </div>

                    <li className='ml-auto pr-5'>
                        <p className="text-lg text-white ">
                         Collaboration With <span className='underline'>Cua Studio</span>
                        </p>

                    </li>
                    

                </ul>

                
              
            </div>
        </div>
    </section>
  );
}
