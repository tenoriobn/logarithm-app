'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP, ScrollTrigger } from 'src/lib/gsap';
import { solutionsCards } from './solutionsCards';

const SolutionsCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (!container || !track) {
        return;
      }

      const articles = track.querySelectorAll('article');
      gsap.fromTo(
        articles,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.8,
          },
        }
      );

      const getScrollDistance = () => {
        const trackWidth = track.scrollWidth;
        const containerWidth = container.getBoundingClientRect().width;
        return Math.max(trackWidth - containerWidth, 0);
      };

      const pinTarget =
        (container.closest('section')?.querySelector('#solutions-pin-target') as HTMLElement | null) || container;

      const st = ScrollTrigger.create({
        trigger: pinTarget,
        start: () => (pinTarget.offsetHeight > window.innerHeight ? 'bottom bottom' : 'top top'),
        end: () => `+=${getScrollDistance() * 2}`,
        scrub: true,
        pin: true,

        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
        }),
      });

      const images = Array.from(track.querySelectorAll('img'));
      let loadedCount = 0;

      const handleImageLoad = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          ScrollTrigger.refresh();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad, { once: true });
        }
      });

      return () => {
        images.forEach((img) => img.removeEventListener('load', handleImageLoad));
        st.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full flex-1 min-h-0 overflow-hidden"
      style={{ containerType: 'inline-size' } as React.CSSProperties}
    >
      <div
        ref={trackRef}
        className="3xl:gap-[1.666vw] grid grid-flow-col grid-rows-[1fr_auto] h-full w-max items-center gap-4 will-change-transform md:gap-8"
      >
        {solutionsCards.map((card) => (
          <article
            key={card.id}
            className="opacity-0 grid grid-rows-subgrid row-span-2 bg-border-brand 3xl:rounded-[1.666vw] 3xl:p-[0.139vw] 3xl:w-[calc(50cqw-2.5vw)] 3xl:max-w-none h-full shrink-0 rounded-2xl p-0.5 md:rounded-4xl w-[calc(100cqw-2rem)] md:w-[calc(100cqw-4rem)] max-w-[488px] lg:w-[calc(50cqw-3rem)] 2xl:max-w-[672px] first:ml-4 md:first:ml-8 3xl:first:ml-[1.666vw] last:mr-4 md:last:mr-8 3xl:last:mr-[1.666vw] min-h-[342px]"
          >
            <div className="bg-surface-875 3xl:gap-[1.666vw] 3xl:rounded-[1.666vw] 3xl:p-[1.666vw] grid grid-rows-subgrid row-span-2 h-full gap-4 rounded-2xl p-4 md:gap-6 lg:gap-8 md:rounded-4xl md:p-6 lg:p-8 overflow-hidden">
              <div className="relative aspect-video shrink-0 min-h-[120px] w-full overflow-hidden rounded-xl flex-1 h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 672px"
                  quality={100}
                  className="object-cover"
                />
              </div>

              <div className="3xl:space-y-[1.666vw] space-y-4 md:space-y-6 flex flex-col justify-start">
                <div className="3xl:gap-[.834vw] flex flex-col items-center gap-3">
                  <p className="text-gradient text-gradient-brand 3xl:text-[.833vw] w-max text-center text-[clamp(.75rem,2.5vw,1rem)] font-semibold uppercase">
                    {card.category}
                  </p>

                  <h3 className="text-gradient text-gradient-white 3xl:text-[1.666vw] text-center text-xl text-[clamp(1.25rem,4.5vw,2rem)] font-medium">
                    {card.title}
                  </h3>
                </div>

                <p className="3xl:text-[1.25vw] text-center text-[clamp(1rem,3.5vw,1.5rem)] text-white/70">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SolutionsCards;
