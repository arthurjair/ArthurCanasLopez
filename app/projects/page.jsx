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
         <div className="relative z-20 flex items-center justify-center md:py-0">
             <div className="w-full max-w-[95vw]  bg-[#E34C9D] rounded-lg border-2 border-black-700 p-1 mt-5">
                 {/* Navbar inside the container (moved to component) */}
                   <Navigationbar isInline={true} />

                 {/* Hero content */}
          
                 <div className="my-4 pt-10 md:pt-30">
                    <div className="md:mt-10 mb-10 md:px-5 flex relative items-center flex-col gap-12 text-center">
                        <div className='absolute z-2  left-1/20  -translate-y-2/3 md:left-1/6 lg:left-2/10 lg:-translate-y-2/3 '> <Image  src={assets.projects_smiski} alt="Projects Smiski" className='w-30 md:w-40 lg:w-50' /></div>
                        <h1 className="flex relative text-6xl md:text-8xl  lg:text-[12vw] font-figtree font-black text-[#F7FD06] [-webkit-text-stroke:1.5px_#000000] lg:[-webkit-text-stroke:2.5px_#000000] scale-y-150 ">PROJECTS</h1>
                        <p className='max-w-3xl text-center lg:text-4xl  '>From websites, posters, apps, logos, and animation. Ive been learning a lot and creating work Im really proud of. Heres a look at my progress so far.</p>

                    </div>

                    <div id="vanderlande" className='Vanderlande p-5'>
                        <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 ">   
                            {[

                              { type: 'text', title: 'Moppuccino', subtitle: 'Artwork + Van Abbe Museum Exhibition 2026' },
                              
                              
                              { type: 'img', src: assets.work_sww },
                              { type: 'img', src: assets.sww_image3 },
                              { type: 'img', src: assets.sww_image4 },
                              { type: 'img', src: assets.sww_image2 },
                              
                              
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
                                      During the spring semester, I joined the workshops at Studio Woensel West, a creative studio in Eindhoven for young creatives. Alongside my Minor, I wanted a space to keep creating, meet new people, and connect with the local creative community.{"\n\n"}

                                      The workshops were connected to an exhibition at the Van Abbemuseum, where we were asked to create a project around the theme of Time. After a workshop focused on nostalgic objects and personal memories, I became interested in storytelling and developed concepts inspired by the stories shared within the group.{"\n\n"}

                                      For my personal project, I chose to focus on my late dog, Cappuccino. I created a short audio story about him and built a physical artwork called Moppuccino, inspired by a family joke where my mother would jokingly call him a mop whenever he lay in the way while she was cleaning. Using actual mop heads, I turned that memory into a playful tribute.{"\n\n"}

                                      Seeing the work exhibited at the Van Abbemuseum was a rewarding experience. The project pushed me outside my comfort zone, as I usually work in digital and graphic design rather than physical making, but it became one of the most meaningful creative projects I have worked on.{"\n\n"}




                                      
                                    </p>
                                    
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="EverythingMustGo" className='Everything Must Go p-5'>
                      <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 ">   
                            {[ 
                              { type: 'img', src: assets.work_everythingmustgo },
                              { type: 'img', src: assets.everythingmustgo_image1 },
                              { type: 'text', title: 'Everything Must Go', subtitle: 'Frontend Development 2026 + Supabase + Website ' },
                              { type: 'img', src: assets.everythingmustgo_image2 },
                              { type: 'img', src: assets.everythingmustgo_image3 },
                              { type: 'img', src: assets.everythingmustgo_image4 },
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
                                      In my Frontend Development semester, I learned how to work with React, Next.js, and Supabase. As part of the course, we were assigned to create a fake webshop.{"\n\n"}

                                     After finishing the assignment, I started thinking: why not take this project and completely redesign it for Project X? {"\n\n"}

                                     That's exactly what I did.{"\n\n"}

                                     My biggest inspiration came from FISK Project's "ALL SHIRTS MUST GO" aesthetic, with its bright colors, oversized typography, and bold visual language. From there, I researched magazine and catalog designs from the 2000s, looking for recurring patterns and graphic elements that I could incorporate into my own work.

                                     To push the concept even further, I also drew inspiration from Chinese webshop interfaces, adding playful and sometimes overwhelming popup elements to create a more chaotic and attention-grabbing shopping experience.{"\n\n"}

                                     I built this website in just three weeks after getting a late start on Project X, but I genuinely enjoyed every part of the process. Seeing it finally go live feels incredibly rewarding.{"\n\n"}

                                     While you can't actually buy anything, the website is all about exploring the concept and the visual experience. so feel free to check it out!
                                    </p>
                                    <a
                                      href="https://every-thing-must-go.vercel.app/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-block bg-black text-white rounded-lg p-2 mt-5"
                                    >
                                      Check it out!
                                    </a>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="heyyou" className='Heyyou p-5'>
                      <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 ">   
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
                          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">   
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
                          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 ">   
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
                          <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 ">   
                            {[

                              { type: 'text', title: 'Vanderlande', subtitle: 'App - Smart Mobile 2025' },
                              
                              { type: 'img', src: assets.vanderlande_image1 },
                              { type: 'img', src: assets.work_vanderlande },
                              { type: 'img', src: assets.vanderlande_image3 },
                              { type: 'img', src: assets.vanderlande_image4 },
                              { type: 'img', src: assets.vanderlande_image2 },
                              
                              
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
                                      I contributed mainly to the layout, visual style, and tone of voice of the project. I took inspiration from other creative trend reports like IKEA At Home and the CSCS Report, both known for their strong storytelling and visual design which we aimed to bring to Vanderlande’s version.


                                      
                                    </p>
                                    
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="nathalie" className='Nathalie p-5'>
                      <div className="flex overflow-visible items-start gap-8">
                        <div className="flex-1">
                          <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 ">   
                            {[ 
                              { type: 'img', src: assets.work_nathalie },
                              { type: 'img', src: assets.nathalie_image1 },
                              { type: 'text', title: 'Nathalie Silverentand', subtitle: ' Website Redesign - Semester 2 2024' },
                              { type: 'img', src: assets.nathalie_image2 },
                              { type: 'img', src: assets.nathalie_image3 },
                              { type: 'img', src: assets.nathalie_image4 },
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
                                      One of my first design projects was for Nathalie Silverentand, a Dutch painter.
                                      In semester 2, we got the assignment to help her rebrand and build a website that matched who she is as an artist. It was one of the first times we had real creative control, and we got to push things far enough to make something genuinely cool.{"\n\n"}
                                      We stayed in close contact with Nathalie throughout the process and showed her multiple iterations along the way. But as the deadline got closer, we decided to keep the final version a surprise because the direction we chose was a pretty big shift. Definitely a risk.{"\n\n"}
                                      Turns out it paid off: she loved it, and she ended up using our rebrand on her socials too. More than anything, this project taught me to not be afraid of doing something different and to keep trying new ideas. High risk, big reward.
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
