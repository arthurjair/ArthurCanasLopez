import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";



const Recentworks = () => {
  return (
    <section className="relative w-full z-10 mt-8 md:mt-12 lg:mt-30">
     <div className="relative flex items-center justify-center ">
        <div className="w-full max-w-[95vw] bg-blue-600 rounded-lg border-2 border-black-700 p-">
          <h1 className="text-center mb-2 text-4xl md:text-[3.5vw] font-figtree font-weight-bolder text-[#FF0000] [-webkit-text-stroke:2.5px_#FFFFFF] py-10">My bag consists of:</h1>
          <ul className="text-white text-2xl md:text-[3vw] font-inter font-medium flex flex-col items-center gap-4">
             <li>Digital Design</li>
             <li>Web Design</li>
             <li>Digital Design</li>
             <li>Direction & Vision</li>
             <li>Graphic Interaction</li>
             <li>Visual Storytelling</li>
            </ul>


            <span className="font-semibold uppercase text-4xl md:text-9xl text-[#FF0000] [-webkit-text-stroke:4.5px_#FFFFFF] font-inter flex justify-center mt-20 mb-4 bg-[#FFF200]">
                RECENT WORK$
               </span>
          <HorizontalScrollCarousel />
          <div className="flex h-48 items-center justify-center">
               
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] ">
      <div className="sticky top-20 flex overflow-hidden">
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
    <div
      key={card.id}
      className="group relative h-[550px] w-[450px] overflow-hidden bg-neutral-200 rounded-lg"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={card.url}               // can be a string like '/work-heyyou.png' (public/) or an imported image object (assets.someImage)
          alt={card.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 "
          priority={false}
        />
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Recentworks

const cards = [
  { url: '/work-heyyou.svg',          title: 'Title 1', id: 1 }, // file in public/
  { url: '/work-boroughs.jpg',        title: 'Title 2', id: 2 }, // using your imported assets object (works if assets.work_boroughs is an imported image)
  { url: '/work-vanderlande.jpg',     title: 'Title 3', id: 3 },
  { url: '/work-liliana.jpg',         title: 'Title 4', id: 4 },
  { url: '/work-abstract-5.jpg',      title: 'Title 5', id: 5 },
  { url: '/work-abstract-6.jpg',      title: 'Title 6', id: 6 },
  { url: '/work-abstract-7.jpg',      title: 'Title 7', id: 7 },
];