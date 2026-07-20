'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import { principlesCards } from './principlesCards';

const PrinciplesCards = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll('.principle-card');

      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            stagger: 0.3,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 0.8,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <ul ref={containerRef} className="3xl:gap-[1.666vw] z-2 grid auto-rows-fr grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 2xl:grid-cols-12">
      {principlesCards.map((card, index) => (
        <li
          key={card.id}
          className={`principle-card opacity-0 border-brand-675 bg-brand-725 3xl:rounded-[1.666vw] 3xl:p-[1.666vw] 3xl:border-[0.139vw] rounded-2xl border-2 p-4 md:rounded-4xl md:p-8 ${index === 0
            ? '2xl:col-span-7'
            : index === 1
              ? '2xl:col-span-5'
              : index === 2
                ? '2xl:col-span-5'
                : '2xl:col-span-7'
            } `}
        >
          <p className="text-gradient text-gradient-white 3xl:text-[2.916vw] 3xl:mb-[1.666vw] mb-4 w-max text-[clamp(1.5rem,7.5vw,3.5rem)] font-medium md:mb-8">
            {card.number}
          </p>

          <h3 className="text-gradient text-gradient-white 3xl:text-[1.666vw] 3xl:mb-[.833vw] mb-2 w-max text-[clamp(1.25rem,4.5vw,2rem)] font-medium md:mb-4">
            {card.title}
          </h3>

          <p className="3xl:text-[1.25vw] text-[clamp(1rem,3.5vw,1.5rem)] text-white/70">
            {card.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PrinciplesCards;
