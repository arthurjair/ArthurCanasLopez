'use client';
import Footer from '../components/Footer';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Navigationbar from '../components/Navigationbar'


export default function Projects() {

  // scroll to hash on mount and when hash changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // small timeout to allow layout/paint
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  // preload helper  handles imported image modules or string URLs
  function preloadImage(src) {
    if (!src) return;
    const url = typeof src === 'string' ? src : src?.src || src?.default;
    if (!url) return;
    const img = new window.Image();
    img.src = url;
  }

  // start fetching video metadata early (no UI change)
  function preloadVideo(src) {
    if (!src) return;
    const url = typeof src === 'string' ? src : src?.src || src?.default;
    if (!url || typeof document === 'undefined') return;
    const v = document.createElement('video');
    v.preload = 'metadata';
    v.src = url;
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
          
                 <div className="my-4  pt-30">
                    <div className="mt-10 mb-10 px-5 flex relative items-center flex-col gap-12 text-center">
                        <div className='absolute z-2  left-1/5 -translate-y-3/5 '> <Image width={250} height={80} src={assets.projects_smiski} alt="Projects Smiski" /></div>
                        <h1 className="flex relative text-3xl  lg:text-[12vw] font-figtree font-black text-[#F7FD06] [-webkit-text-stroke:2.5px_#000000] scale-y-150 ">PROJECTS</h1>
                        <p className='max-w-3xl text-center lg:text-4xl  '>From websites, posters, apps, logos, and animation. Ive been learning a lot and creating work Im really proud of. Heres a look at my progress so far.</p>

                    </div>

                    <div id="heyyou" className='Heyyou p-5'>
                      <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 ">   
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
                                className="mb-4 break-inside-avoid w-full pb-3"
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
                                  <div className="w-full rounded-lg bg-white p-6 shadow-[-10px_10px_0_rgba(0,0,0,1)] border-0">
                                    <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
                                    <h2 className="text-lg font-extralight mb-4">{item.subtitle}</h2>
                                    <p className="text-xl whitespace-pre-line">
                                      Imagine if your crush actually knew you existed ...well, now they can! With HeyYou, you simply add one of their social media profiles, and the app gathers all their public information for you.{"\n\n"}
                                      HeyYou started as a joke I made a semester earlier, but during my Smart Mobile semester, my teachers actually liked the concept. So my partner and I decided to make it real. The app collects publicly available online information and brings it together in one place, making it easier to get to know someone before they even know you.{"\n\n"}
                                      Its meant to be a funny, satirical project that also raises awareness about how much personal information people share online and how easily accessible it really is.
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="boroughs" className='Boroughs p-5'>
                        <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">   
                            {[
                              { type: 'img', src: assets.work_boroughs },
                              { type: 'text', title: 'Boroughs', subtitle: ' App + Self thought - Smart Mobile 2025' },
                              { type: 'img', src: assets.boroughs_image1 },
                              { type: 'img', src: assets.boroughs_image2 },
                              { type: 'img', src: assets.boroughs_image3 },
                              { type: 'video', src: '/videos/boroughs-video.mp4' },
                              
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="mb-4 break-inside-avoid w-full pb-3"
                                onMouseEnter={() => {
                                  if (item.type === 'img') preloadImage(item.src);
                                  if (item.type === 'video') preloadVideo(item.src);
                                }}
                              >
                                {item.type === 'img' ? (
                                  <Image
                                    src={item.src}
                                    alt={`work-${i}`}
                                    width={600}
                                    height={900}
                                    className="w-full h-auto rounded-lg shadow transition-opacity duration-500"
                                  />
                                ) : item.type === 'video' ? (
                                  <video
                                    src={item.src}
                                    controls
                                    playsInline
                                    muted
                                    loop
                                    preload="metadata"
                                    className="w-full h-auto rounded-lg shadow"
                                  />
                                ) : (
                                  <div className="w-full rounded-lg bg-white p-6 shadow-[-12px_12px_0_rgba(0,0,0,1)] border-0">
                                    <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
                                    <h2 className="text-lg font-extralight mb-4">{item.subtitle}</h2>
                                    <p className="text-xl whitespace-pre-line">
                                      Forgetting things you wanted to get for yourself, your home, your partner, or even your mom is completely normal. But that ends with Boroughs: the app where you can categorize, personalize, and list the things you want from any site. Think of it as your notes app combined with Pinterest. <br /> <br />
                                      Boroughs is another original idea my partner and I came up with during our Smart Mobile semester. We wanted to create an app that helps you save and organize things you find online so you never lose track of them again. Maybe you saw a nice lamp on Pinterest, found it later on IKEA, saved it in your notes, and then forgot about it. Boroughs fixes that. It reminds you, keeps everything visual, and lets you personalize your boards to match your style
                                      
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                    <div id="liliana" className='Liliana p-5'>
                        <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 ">   
                            {[
                              { type: 'img', src: assets.liliana_image1 },
                              { type: 'img', src: assets.work_liliana },
                              { type: 'text', title: 'Liliana Erasmus', subtitle: 'Website Made with Wix Studio' },
                              { type: 'img', src: assets.liliana_image3 },
                              { type: 'img', src: assets.liliana_image2 },
                              { type: 'img', src: assets.liliana_image4 },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="mb-4 break-inside-avoid w-full pb-3"
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
                                  <div className=" w-full rounded-lg bg-white p-6 shadow-[-10px_10px_0_rgba(0,0,0,1)] border-0">
                                    <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
                                    <h2 className="text-lg thin text-gray-800 mb-4">{item.subtitle}</h2>
                                    <p className="text-xl whitespace-pre-line">
                                      Liliana Erasmus is a Aruban-Dutch writer and illustrator who has been creating childrens books for over 20 years. Her stories often celebrate imagination, culture, and family values that come through in both her writing and illustrations.{"\n\n"}
                                      She recently reached out to me to rebrand and redesign her website, as her previous one no longer reflected her experience or personality as an artist. My goal was to give her a fresh, modern online presence that still felt warm, creative, and true to her storytelling style. The new design focuses on showcasing her books, art, and background in a more engaging and personal way.
                                      
                                    </p>
                                    <button className=' bg-black text-white rounded-lg p-2 mt-5 '>Coming Soon!</button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="vanderlande" className='Vanderlande p-5'>
                        <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 ">   
                            {[
                              { type: 'img', src: assets.work_vanderlande },
                              { type: 'img', src: assets.vanderlande_image1},
                              { type: 'text', title: 'Vanderlande Trends App', subtitle: 'Industry Project - Smart Mobile 2025' },
                              { type: 'img', src: assets.vanderlande_image3 },
                              { type: 'img', src: assets.vanderlande_image2 },
                              { type: 'img', src: assets.vanderlande_image4 },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="mb-4 break-inside-avoid w-full pb-3"
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
                                  <div className=" w-full rounded-lg bg-white p-6 shadow-[-10px_10px_0_rgba(0,0,0,1)] border-0">
                                    <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
                                    <h2 className="text-lg thin text-gray-800 mb-4">{item.subtitle}</h2>
                                    <p className="text-xl whitespace-pre-line">
                                      For my final project in the Smart Mobile semester, our client was Vanderlande, who asked us to improve their existing trend report. My group and I decided to give it a more visual and engaging direction, turning it into an experience rather than a plain document.{"\n\n"}
                                      I contributed mainly to the layout, visual style, and tone of voice of the project. I took inspiration from other creative trend reports like IKEA At Home and the CSCS Report, both known for their strong storytelling and visual design which we aimed to bring to Vanderlandes version.
                                      
                                      
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                    
                 </div>
             </div>
            </div>
        </section>
      <Footer />
    </>
  );
}
