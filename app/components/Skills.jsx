import React from 'react'

export default function Skills() {
  return (
    <section className="relative ">
        <div className="relative flex items-center justify-center ">

           <div className="w-full max-w-[95vw] bg-[#F7FD06] rounded-lg border-2 border-black-700 ">
              <h2 className="flex justify-center md:text-[15vw] lg:text-[15vw] font-bold text-[#3B62D5] scale-y-150" style={{ WebkitTextStroke: '2.5px #000' }}>STATLINE</h2>
               <ul className="mt-4 space-y-2  flex flex-col items-center pb-10">
                 <li className="lg:text-5xl scale-y-150 p-9"><span className='lg:text-9xl'>0</span> JAVA SCRIPT BUGS FIXED <br /> <span className='lg:text-3xl lg:ml-25 scale-y-150'>(CLAIMED OTHER WISE)</span></li>
                 <li className="lg:text-5xl scale-y-150 p-5 lg:mr-27"><span className='lg:text-9xl'>48</span> LAYERS NAMED "FINAL"</li>
                 <li className="lg:text-5xl scale-y-150 p-5 lg:ml-10"><span className='lg:text-9xl'>82</span> PINTEREST BOARDS CREATED</li>
                 <li className="lg:text-5xl scale-y-150 p-5 lg:ml-55"><span className='lg:text-9xl'>7</span> EPIPHANYS WHILE ON THE TOILET</li>
                 <li className="lg:text-5xl scale-y-150 p-5"><span className='lg:text-9xl'>100%</span> ACTING LIKE IT'S ALL INTENTIONAL</li>
              </ul>
           </div>
       </div>
    </section>
  );
}
