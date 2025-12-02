'use client';
import Footer from '../components/Footer';
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from '../components/Navigationbar'
import ReactCardFlip from 'react-card-flip';

export default function Projects() {

    const [flippedMap, setFlippedMap] = React.useState({});

    function flipCard(id) {
        setFlippedMap(prev => ({ ...prev, [id]: !prev[id] }));
    }

  return (
    <>
       <section className="relative w-full  ">
          {/* Blue container (now wraps nav + content) */}
         <div className="relative z-20 flex items-center justify-center py-12 md:py-0">
             <div className="w-full max-w-[95vw]  bg-[#E34C9D] rounded-lg border-2 border-black-700 p-1 mt-5">
                 {/* Navbar inside the container (moved to component) */}
                   <Navigationbar isInline={true} />

                 {/* Hero content */}
          
                 <div className="my-4  pt-20   ">
                    <div>
                        <h1>PROJECTS</h1>
                        <p>From websites, posters, apps, logos, and animation. I’ve been learning a lot and creating work I’m really proud of. Here’s a look at my progress so far.</p>

                    </div>

                    <div className='Heyyou'>
                      <div style={{ perspective: 1200 }} className="flex ">
                        <ReactCardFlip isFlipped={flippedMap['heyyou']} flipDirection="horizontal">
                          <div
                            className="Frontside w-[400px] h-[600px] rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-500 hover:scale-[1.02]"
                            onClick={() => flipCard('heyyou')}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard('heyyou'); } }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={flippedMap['heyyou']}
                          >
                            <Image
                              src={assets.work_heyyou}
                              alt="HeyYou Front"
                              width={400}
                              height={600}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          <div
                            className="Backside w-[400px] h-[600px] rounded-lg bg-white p-6 cursor-pointer flex flex-col justify-between shadow-[-15px_15px_0_rgba(0,0,0,1)]"
                            onClick={() => flipCard('heyyou')}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard('heyyou'); } }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={!flippedMap['heyyou']}
                          >
                            <div>
                              <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                              <p className="text-sm text-gray-700">
                                Add your project description here — what you did, tools used, and the outcome.
                                Keep it concise so the flip stays snappy.
                              </p>
                            </div>

                            <div className="flex justify-end">
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); flipCard('heyyou'); }}
                                className="bg-black text-white px-3 py-1 rounded-md text-sm"
                              >
                                Close
                              </button>
                            </div>
                            
                           
                          </div>
                        </ReactCardFlip>
                      </div>
                    </div>
                    <div className='Boroughs'>
                        <div style={{ perspective: 1200 }} className="flex ">
                        <ReactCardFlip isFlipped={flippedMap['boroughs']} flipDirection="horizontal">
                          <div
                            className="Frontside w-[400px] h-[600px] rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-500 hover:scale-[1.02]"
                            onClick={() => flipCard('boroughs')}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard('boroughs'); } }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={flippedMap['boroughs']}
                          >
                            <Image
                              src={assets.work_boroughs}
                              alt="HeyYou Front"
                              width={400}
                              height={600}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          <div
                            className="Backside w-[400px] h-[600px] rounded-lg bg-white p-6 cursor-pointer flex flex-col justify-between shadow-[-15px_15px_0_rgba(0,0,0,1)]"
                            onClick={() => flipCard('boroughs')}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard('boroughs'); } }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={!flippedMap['boroughs']}
                          >
                            <div>
                              <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                              <p className="text-sm text-gray-700">
                                Add your project description here — what you did, tools used, and the outcome.
                                Keep it concise so the flip stays snappy.
                              </p>
                            </div>

                            <div className="flex justify-end">
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); flipCard('boroughs'); }}
                                className="bg-black text-white px-3 py-1 rounded-md text-sm"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </ReactCardFlip>
                      </div>
                    </div>
                    <div className='Vanderlande'></div>
                    <div className='Liliana'> </div>
                 </div>
             </div>
            </div>
        </section>
      <Footer />
    </>
  );
}