import React from 'react'
import CountUp from './Countup'


export default function Skills() {
  return (
    <section className="relative ">
        <div className="relative flex items-center justify-center ">

           <div className="w-full max-w-[95vw] bg-[#F7FD06] rounded-lg border-2 border-black-700 ">
              <h2 className="flex justify-center text-[19vw]  md:text-[15vw] lg:text-[15vw] font-bold text-[#3B62D5] scale-y-150" style={{ WebkitTextStroke: '2.5px #000' }}>STATLINE</h2>
               <ul className="mt-4 pb-5 pl-5 lg:pb-10 space-y-2  flex flex-col md:pl-10 ">
                 <li className=" text-md md:text-3xl lg:text-5xl scale-y-150 pb-5 md:pb-7 lg:pb-15"><span className='text-3xl md:text-6xl lg:text-9xl'>0</span> JAVA SCRIPT BUGS FIXED <br /> <span className=' text-sm ml-5 lg:text-3xl md:ml-12  lg:ml-25 scale-y-150'>(CLAIMED OTHER WISE)</span></li>
                 <li className="text-md md:text-3xl lg:text-5xl scale-y-150 pb-5 md:pb-7 lg:pb-15 "><span className='text-3xl md:text-6xl lg:text-9xl'>
                  <CountUp
                   from={0}
                   to={48}
                   separator=","
                   direction="up"
                   duration={1.5}
                   className="count-up-text"/></span> LAYERS NAMED "FINAL"</li>
                 <li className="text-md md:text-3xl lg:text-5xl scale-y-150 pb-5 md:pb-7 lg:pb-15 "><span className='text-3xl md:text-6xl lg:text-9xl'><CountUp
                   from={0}
                   to={82}
                   separator=","
                   direction="up"
                   duration={1.5}
                   className="count-up-text"/></span> PINTEREST BOARDS CREATED</li>
                 <li className="text-md md:text-3xl lg:text-5xl scale-y-150 pb-5 md:pb-7 lg:pb-15 "><span className='text-3xl md:text-6xl lg:text-9xl'><CountUp
                   from={0}
                   to={7}
                   separator=","
                   direction="up"
                   duration={2}
                   className="count-up-text"/></span> EPIPHANYS WHILE ON THE TOILET</li>
                 <li className="text-sm md:text-3xl lg:text-5xl scale-y-150 pb-5 md:pb-7 lg:pb-15 "><span className='text-3xl md:text-6xl lg:text-9xl'><CountUp
                   from={0}
                   to={100}
                   separator=","
                   direction="up"
                   duration={1.5}
                   className="count-up-text"/>%</span> ACTING LIKE IT'S ALL INTENTIONAL</li>
              </ul>
           </div>
       </div>
       
    </section>
  );
}
