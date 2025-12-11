import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from '@/assets/assets'



const Recentworks = () => {
  useEffect(() => {
    const eyes = document.getElementsByClassName("eye");
    const handleMouseMove = (event) => {
      for (let eye of eyes) {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX) + 180;
        const rotation = (angle * 180) / Math.PI + 90;
        eye.style.transform = `rotate(${rotation}deg)`;
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);


  return (
    <section className="relative w-full z-10 mt-8 md:mt-12 lg:mt-30">
      <div className="relative flex items-center justify-center ">
        <div className="w-full max-w-[95vw] bg-blue-600 rounded-lg border-2 border-black-700 ">
          <h1 className="text-center mb-2 text-4xl md:text-[3vw] font-figtree font-black text-[#FF0000] [-webkit-text-stroke:2px_#FFFFFF] py-10">My bag consists of:</h1>
          <ul className="text-[#F7FD06] [-webkit-text-stroke:2px_#000000] text-2xl lg:text-7xl font-inter font-extrabold flex flex-col items-center gap-6">
            <li className="relative w-full max-w-3xl flex justify-center items-center py-3">
              <span className="text-center">Digital Design</span>
              <Image
                src={assets.works_digitaldesign}
                alt="Digital Design"
                width={165}
                height={80}
                className="pointer-events-none absolute -left-0 top-1/4 -translate-y-1/2"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center py-3">
              <span className="text-center">Web Design</span>
              <Image
                src={assets.works_webdesign}
                alt="Web Design"
                width={230}
                height={80}
                className="pointer-events-none absolute -right-1 top-1/2 -translate-y-1/2"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center py-3">
              <span className="text-center">Direction &amp; Vision</span>
              <Image
                src={assets.works_direction}
                alt="Direction & Vision"
                width={250}
                height={80}
                className="pointer-events-none absolute -left-17 top-1/7 -translate-y-1/2"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center py-3">
              <span className="text-center">Graphic Interaction</span>
              <Image
                src={assets.eye}
                alt="Graphic Interaction"
                width={140}
                height={80}

                className=" eye pointer-events-none absolute -right-27 top-1/4 -translate-y-1/2"
              /><Image
                src={assets.eye}
                alt="Graphic Interaction"
                width={140}
                height={80}

                className=" eye pointer-events-none absolute -right-5 top-1/4 -translate-y-1/2"
              />
              <Image
                src={assets.eye}
                alt="Graphic Interaction"
                width={140}
                height={80}

                className=" eye pointer-events-none absolute -right-27 top-1/4 -translate-y-1/2"
              />
              <Image
                src={assets.eye}
                alt="Graphic Interaction"
                width={140}
                height={80}
                className=" eye pointer-events-none absolute -right-5 top-1/4 -translate-y-1/2"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center py-3">
              <span className="text-center z-2">Visual Storytelling</span>
              <Image
                src={assets.works_storytelling}
                alt="Visual Storytelling"
                width={175}
                height={80}
                className="pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 z-0"
              />
            </li>
          </ul>
          <div className="mt-10 mb-10 px-5 flex justify-center">
            <h2 className="max-w-3xl text-center lg:text-3xl font-figtree font-bold text-[#F7FD06]">For every project I pick up, one thing always has to come through, personality. I dont believe in blending in or creating just for the sake of it. Everything I design needs to feel like something, carry intention, and reflect either my identity or the clients. If it doesnt stand out, its not worth making.</h2>
          </div>


          <span className="font-extrabold uppercase text-4xl md:text-[9.5vw] text-[#FF0000] [-webkit-text-stroke:4.5px_#FFFFFF] font-inter flex justify-center mt-20  mb-15 bg-[#FFF200] scale-y-150">
            RECENT WORK$
          </span>
          <HorizontalScrollCarousel />
          <div className="flex h-20 items-center justify-center">

          </div>
        </div>


      </div>
    </section>


  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-30%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] ">
      <div className="sticky top-25 flex overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <Link href={`/projects#${card.target}`} className="group relative h-[550px] w-[450px] overflow-hidden bg-neutral-200 rounded-lg " aria-label={card.title}>
      <div className="absolute inset-0 z-0 ">
        <Image
          src={card.url}               
          alt={card.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 "
          priority={false}
        />
      </div>
    </Link>
  );
};

export default Recentworks

const cards = [
  { url: '/work-heyyou.svg', title: 'HeyYou', id: 1, target: 'heyyou' }, // files in public folder/
  { url: '/work-boroughs.jpg', title: 'Boroughs', id: 2, target: 'boroughs' },
  { url: '/work-liliana.jpg', title: 'Liliana', id: 4, target: 'liliana' },
  { url: '/work-vanderlande.jpg', title: 'Vanderlande', id: 3, target: 'vanderlande' },
  
];
