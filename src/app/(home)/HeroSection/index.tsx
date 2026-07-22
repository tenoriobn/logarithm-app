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
    <section
      ref={sectionRef}
      aria-labelledby="hero-section-title"
      className="bg-surface-950 3xl:px-[1.666vw] 3xl:py-[4.998vw] relative flex min-h-svh flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24"
    >
      <HeroBackground />

      <header className="@container z-2 flex w-full flex-col items-center max-lg:gap-4 lg:items-end">
        <SectionTitle
          ref={titleRef}
          id="hero-section-title"
          aria-describedby="hero-section-description"
          className="font-aboro w-full text-[16.32cqw]! leading-[16.32cqw]! uppercase opacity-0"
        >
          logarithm
        </SectionTitle>

        <SectionDescription
          id="hero-section-description"
          className="w-max opacity-0 max-sm:max-w-[288px]"
          ref={descriptionRef}
        >
          A lógica por trás de <br className="sm:hidden" /> grandes transformações.
        </SectionDescription>
      </header>
    </section>
  );
};

export default HeroSection;
