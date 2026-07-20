'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import SectionTitle from 'src/components/SectionTitle';
import HeroBackground from './HeroBackground';
import SectionDescription from 'src/components/SectionDescription';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 }, delay: 0.5 });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 80, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1 }
        );
      }

      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 1.2 },
          '-=1'
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-surface-950 3xl:px-[1.666vw] 3xl:py-[6.667vw] relative flex min-h-svh flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
      <HeroBackground />

      <header className="max-lg:gap-4 z-2 flex w-full flex-col items-center @container lg:items-end">
        <div ref={titleRef} className="w-full opacity-0">
          <SectionTitle id="hero-section-title" className="uppercase font-aboro leading-[16.32cqw]! w-full text-[16.32cqw]!">logarithm</SectionTitle>
        </div>

        <div ref={descriptionRef} className="opacity-0">
          <SectionDescription id="hero-section-description" className="max-sm:max-w-[288px] w-max">
            Entenda como transformamos <br className="hidden sm:max-md:block" /> desafios em soluções digitais.
          </SectionDescription>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
