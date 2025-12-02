'use client';
import Footer from '../components/Footer';
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from '../components/Navigationbar'


export default function Projects() {

  // preload helper — handles imported image modules or string URLs
  function preloadImage(src) {
    if (!src) return;
    const url = typeof src === 'string' ? src : src?.src || src?.default;
    if (!url) return;
    const img = new window.Image();
    img.src = url;
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

                    <div className='Heyyou p-5'>
                      <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">   
                            {[
                              { type: 'img', src: assets.work_heyyou },
                              { type: 'img', src: assets.heyyou_image1 },
                              { type: 'text', title: 'HeyYou', subtitle: ' App + Self thought - Smart Mobile 2025' },
                              { type: 'img', src: assets.heyyou_image2 },
                              { type: 'img', src: assets.heyyou_image3 },
                              { type: 'img', src: assets.heyyou_image4 },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="mb-4 break-inside-avoid w-full"
                                onMouseEnter={() => item.type === 'img' && preloadImage(item.src)} // start preloading on hover
                              >
                                {item.type === 'img' ? (
                                  <Image
                                    src={item.src}
                                    alt={`work-${i}`}
                                    width={600}
                                    height={900}
                                    className="w-full h-auto rounded-lg shadow transition-opacity duration-500"
                                  />
                                ) : (
                                  <div className="w-full rounded-lg bg-white p-6 shadow-[-12px_12px_0_rgba(0,0,0,1)] border-0">
                                    <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
                                    <h2 className="text-lg font-extralight mb-4">{item.subtitle}</h2>
                                    <p className="text-xl whitespace-pre-line">
                                      Imagine if your crush actually knew you existed ...well, now they can! With HeyYou, you simply add one of their social media profiles, and the app gathers all their public information for you.{"\n\n"}
                                      HeyYou started as a joke I made a semester earlier, but during my Smart Mobile semester, my teachers actually liked the concept. So my partner and I decided to make it real. The app collects publicly available online information and brings it together in one place, making it easier to “get to know” someone before they even know you.{"\n\n"}
                                      It’s meant to be a funny, satirical project that also raises awareness about how much personal information people share online and how easily accessible it really is.
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='Boroughs p-5'>
                        <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">   
                            {[
                              { type: 'img', src: assets.work_boroughs },
                              { type: 'img', src: assets.heyyou_image1 },
                              { type: 'text', title: 'Boroughs', subtitle: ' App + Self thought - Smart Mobile 2025' },
                              { type: 'img', src: assets.heyyou_image2 },
                              { type: 'img', src: assets.heyyou_image3 },
                              { type: 'img', src: assets.heyyou_image4 },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="mb-4 break-inside-avoid w-full"
                                onMouseEnter={() => item.type === 'img' && preloadImage(item.src)} // start preloading on hover
                              >
                                {item.type === 'img' ? (
                                  <Image
                                    src={item.src}
                                    alt={`work-${i}`}
                                    width={600}
                                    height={900}
                                    className="w-full h-auto rounded-lg shadow transition-opacity duration-500"
                                  />
                                ) : (
                                  <div className="w-full rounded-lg bg-white p-6 shadow-[-12px_12px_0_rgba(0,0,0,1)] border-0">
                                    <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                                    <h2 className="text-md font-extralight mb-4">{item.subtitle}</h2>
                                    <p className="text-md whitespace-pre-line">
                                      Imagine if your crush actually knew you existed ...well, now they can! With HeyYou, you simply add one of their social media profiles, and the app gathers all their public information for you.{"\n\n"}
                                      HeyYou started as a joke I made a semester earlier, but during my Smart Mobile semester, my teachers actually liked the concept. So my partner and I decided to make it real. The app collects publicly available online information and brings it together in one place, making it easier to “get to know” someone before they even know you.{"\n\n"}
                                      It’s meant to be a funny, satirical project that also raises awareness about how much personal information people share online and how easily accessible it really is.
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
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