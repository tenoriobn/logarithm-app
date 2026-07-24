'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import HeroSection from 'src/components/HeroSection';

const AboutHero = () => {
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
    <HeroSection
      ref={sectionRef}
      titleRef={titleRef}
      descriptionRef={descriptionRef}
      descriptionContent={
        <>
          Entenda como transformamos
          <br className="hidden sm:max-md:block" /> desafios em soluções digitais.
        </>
      }
    />
  );
};

export default AboutHero;
