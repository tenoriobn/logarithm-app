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
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.4, force3D: true },
        delay: 0.3,
      });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 60, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)' }
        );
      }

      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2 },
          '-=1.1'
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
