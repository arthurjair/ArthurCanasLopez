
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const Recentworks = () => {
  useEffect(() => {
    const canTrackPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canTrackPointer) {
      return;
    }

    const eyes = Array.from(document.getElementsByClassName("eye"));
    if (eyes.length === 0) {
      return;
    }

    let rafId = null;
    let latestEvent = null;

    const updateEyes = () => {
      rafId = null;

      if (!latestEvent) {
        return;
      }

      for (const eye of eyes) {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(latestEvent.clientY - eyeY, latestEvent.clientX - eyeX);
        eye.style.rotate = `${(angle * 180) / Math.PI + 90}deg`;
      }
    };

    const handlePointerMove = (event) => {
      latestEvent = event;

      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(updateEyes);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section className="relative w-full z-10 mt-8 md:mt-12 lg:mt-30">
      <div className="relative flex items-center justify-center ">
        <div className="w-full max-w-[95vw] bg-blue-600 rounded-lg border-2 border-black-700 ">
          <h1 className="text-center mb-2 text-2xl md:text-[3vw] font-figtree font-black text-[#FF0000]  [-webkit-text-stroke:1px_#FFFFFF] lg:[-webkit-text-stroke:2px_#FFFFFF] py-5 lg:py-10">
            My bag consists of:
          </h1>
          <ul className="text-[#F7FD06] lg:[-webkit-text-stroke:2px_#000000] [-webkit-text-stroke:1.5px_#000000] text-[9vw] lg:text-7xl font-inter font-extrabold flex flex-col items-center lg:gap-6">
            <li className="relative w-full max-w-3xl flex justify-center items-center lg:py-3">
              <span className="text-center">Digital Design</span>
              <Image
                src={assets.works_digitaldesign}
                alt="Digital Design"
                className="w-15 md:w-30 lg:w-50 pointer-events-none absolute left-4 top-1/5 -translate-y-1/2 md:left-9 lg:-left-6"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center lg:py-3">
              <span className="text-center">Web Design</span>
              <Image
                src={assets.works_webdesign}
                alt="Web Design"
                className="w-25 md:w-40 lg:w-60 pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 md:right-10 lg:right-1"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center lg:py-3">
              <span className="text-center">Direction &amp; Vision</span>
              <Image
                src={assets.works_direction}
                alt="Direction & Vision"
                className="w-25 md:w-40 lg:w-60 pointer-events-none absolute -left-6 top-1/7 -translate-y-1/2 md:-left-4 md:top-1/5 lg:-left-15 lg:top-1/8"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center lg:py-3">
              <span className="text-center">Graphic Interaction</span>
              <Image
                src={assets.eye}
                alt="Graphic Interaction"
                className=" w-15 md:w-30 lg:w-40 eye pointer-events-none absolute right-6 top-1/5 -translate-y-1/2 md:right-16 lg:-right-6 lg:top-1/14"
              />
              <Image
                src={assets.eye}
                alt="Graphic Interaction"
                className=" w-15 md:w-30 lg:w-40 eye pointer-events-none absolute -right-3 top-1/5 -translate-y-1/2 lg:-right-30"
              />
            </li>

            <li className="relative w-full max-w-3xl flex justify-center items-center py-3">
              <span className="text-center z-2">Visual Storytelling</span>
              <Image
                src={assets.works_storytelling}
                alt="Visual Storytelling"
                className="w-20 md:w-40 lg:w-60 pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2  z-0 lg:-left-5"
              />
            </li>
          </ul>
          <div className="mt-10 mb-10 px-5 flex justify-center">
            <h2 className="max-w-3xl text-center lg:text-3xl font-figtree font-bold text-[#F7FD06]">
              For every project I pick up, one thing always has to come through, personality. I dont believe in blending in or creating just for the sake of it. Everything I design needs to feel like something, carry intention, and reflect either my identity or the clients. If it doesnt stand out, its not worth making.
            </h2>
          </div>

          <span className="font-extrabold uppercase text-4xl [-webkit-text-stroke:1.5px_#FFFFFF] md:text-[9.5vw] text-[#FF0000] md:[-webkit-text-stroke:4.5px_#FFFFFF] font-inter flex justify-center mt-20  mb-15 bg-[#FFF200] md:scale-y-150 scale-y-250">
            RECENT WORK$
          </span>

          {/* Desktop horizontal scroll (native, lower jank) */}
          <div className="hidden md:block">
            <HorizontalScrollCarousel />
          </div>

          {/* Mobile horizontal scroll (CSS scroll-snap, native) */}
          <div className="md:hidden pb-8">
            <MobileHorizontalCarousel />
          </div>

          <div className="flex h-10 md:h-20 items-center justify-center" />
        </div>
      </div>
    </section>
  );
};

/* Desktop Horizontal Scroll (native scroll-snap) */
const HorizontalScrollCarousel = () => {
  const carouselRef = useRef(null);
  const loopWidthRef = useRef(0);
  const dragStateRef = useRef({
    isPointerDown: false,
    isDragging: false,
    isHovered: false,
    startX: 0,
    startScrollLeft: 0,
    targetScrollLeft: 0,
    currentScrollLeft: 0,
    hasDragged: false,
    pointerId: null,
  });
  const suppressClickRef = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const measureLoopWidth = () => {
      loopWidthRef.current = carousel.scrollWidth / 2;
    };

    measureLoopWidth();

    const resizeObserver = new ResizeObserver(() => {
      measureLoopWidth();
    });

    resizeObserver.observe(carousel);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let animationFrameId = null;

    const tick = () => {
      const carousel = carouselRef.current;
      const dragState = dragStateRef.current;
      const loopWidth = loopWidthRef.current;

      if (!carousel || loopWidth <= 0) {
        animationFrameId = window.requestAnimationFrame(tick);
        return;
      }

      if (dragState.isDragging) {
        const distance = dragState.targetScrollLeft - dragState.currentScrollLeft;
        dragState.currentScrollLeft += distance * 0.18;
      } else if (!dragState.isHovered) {
        dragState.currentScrollLeft += .75;
        while (dragState.currentScrollLeft >= loopWidth) {
          dragState.currentScrollLeft -= loopWidth;
          dragState.targetScrollLeft -= loopWidth;
        }

        while (dragState.currentScrollLeft < 0) {
          dragState.currentScrollLeft += loopWidth;
          dragState.targetScrollLeft += loopWidth;
        }
      }

      carousel.scrollLeft = dragState.currentScrollLeft;
      animationFrameId = window.requestAnimationFrame(tick);
    };

    animationFrameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handlePointerDown = (event) => {
    const carousel = carouselRef.current;
    if (!carousel || event.button !== 0) {
      return;
    }

    const currentScrollLeft = carousel.scrollLeft;
    dragStateRef.current = {
      isPointerDown: true,
      isDragging: false,
      isHovered: true,
      startX: event.clientX,
      startScrollLeft: currentScrollLeft,
      targetScrollLeft: currentScrollLeft,
      currentScrollLeft,
      hasDragged: false,
      pointerId: event.pointerId,
    };
  };

  const handlePointerMove = (event) => {
    const carousel = carouselRef.current;
    const dragState = dragStateRef.current;

    if (!carousel || !dragState.isPointerDown) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;

    if (!dragState.isDragging && Math.abs(deltaX) > 4) {
      if (dragState.pointerId !== null) {
        carousel.setPointerCapture(dragState.pointerId);
      }

      dragState.isDragging = true;
      dragState.hasDragged = true;
      suppressClickRef.current = true;
    }

    if (!dragState.isDragging) {
      return;
    }

    dragState.targetScrollLeft = Math.max(0, Math.min(loopWidthRef.current, dragState.startScrollLeft - deltaX));
  };

  const endDrag = (event) => {
    const carousel = carouselRef.current;
    const dragState = dragStateRef.current;

    if (carousel && dragState.pointerId !== null && carousel.hasPointerCapture(dragState.pointerId)) {
      carousel.releasePointerCapture(dragState.pointerId);
    }

    dragState.isPointerDown = false;
    dragState.isDragging = false;

    dragState.currentScrollLeft = carousel ? carousel.scrollLeft : dragState.currentScrollLeft;
    dragState.targetScrollLeft = dragState.currentScrollLeft;
    dragState.hasDragged = false;
    dragState.pointerId = null;
    suppressClickRef.current = false;
  };

  const handleMouseEnter = () => {
    dragStateRef.current.isHovered = true;
  };

  const handleMouseLeave = () => {
    dragStateRef.current.isHovered = false;
  };

  const handleClickCapture = (event) => {
    if (!suppressClickRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  return (
    <div
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={handleClickCapture}
      className="w-full overflow-x-hidden scrollbar-hide pb-4 overscroll-x-contain select-none cursor-grab active:cursor-grabbing"
    >
      <div className="flex gap-4 px-4 w-max">
        {carouselCards.map((card, index) => {
          const isClone = index >= cards.length;
          return <DesktopCard card={card} key={`${card.id}-${index}`} isClone={isClone} />;
        })}
      </div>
    </div>
  );
};

/* Mobile Horizontal Scroll (CSS Scroll-Snap) */
const MobileHorizontalCarousel = () => {
  return (
    <div className="w-full overflow-x-auto snap-x snap-proximity scrollbar-hide">
      <div className="flex pl-2 gap-4 w-max-full">
        {cards.map((card) => (
          <MobileCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

/* Desktop Card */
const DesktopCard = ({ card, isClone = false }) => {
  return (
    <Link
      href={`/projects#${card.target}`}
      className="group relative h-[550px] w-[450px] overflow-hidden bg-neutral-200 rounded-lg flex-shrink-0"
      aria-label={card.title}
      aria-hidden={isClone}
      tabIndex={isClone ? -1 : 0}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={card.url}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 "
          priority={false}
          sizes="(min-width: 768px) 450px, 100vw"
        />
      </div>
    </Link>
  );
};

/* Mobile Card (scroll-snap align) */
const MobileCard = ({ card }) => {
  return (
    <Link
      href={`/projects#${card.target}`}
      className="group relative h-100 w-70 overflow-hidden bg-neutral-200 rounded-lg flex-shrink-0 snap-center"
      aria-label={card.title}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={card.url}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-300 group-active:scale-110"
          priority={false}
          sizes="100vw"
        />
      </div>
    </Link>
  );
};

export default Recentworks;

const cards = [
  { url: "/work-everythingmustgo.webp", title: "EverythingMustGo", id: 1, target: "EverythingMustGo" },
  { url: "/work-heyyou.webp", title: "HeyYou", id: 2, target: "heyyou" },
  { url: "/work-boroughs.webp", title: "Boroughs", id: 3, target: "boroughs" },
  { url: "/work-liliana.webp", title: "Liliana", id: 4, target: "liliana" },
  { url: "/work-vanderlande.webp", title: "Vanderlande", id: 5, target: "vanderlande" },
  { url: "/work-nathalie.webp", title: "Nathalie", id: 6, target: "nathalie" },
  
  
];

const carouselCards = [...cards, ...cards];