'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import SectionTitle from 'src/components/SectionTitle';
import SectionDescription from 'src/components/SectionDescription';
import PrinciplesCards from './PrinciplesCards';

const PrinciplesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const headerElements = sectionRef.current?.querySelectorAll('.animate-header');

      if (headerElements) {
        gsap.fromTo(
          headerElements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              end: 'top 35%',
              scrub: 0.8,
            }
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      aria-labelledby="principles-section-title"
      ref={sectionRef}
      className="bg-surface-875 3xl:gap-[1.666vw] 3xl:p-[1.666vw] relative flex flex-col items-center gap-4 p-4 md:gap-8 md:p-8"
    >
      <div
        aria-hidden
        className="absolute top-0 h-full w-full bg-[linear-gradient(180deg,#0E1F29_0%,rgba(14,31,41,0.13)_20%,rgba(14,31,41,0)_50%,rgba(14,31,41,0.132212)_80%,#0E1F29_100%)] bg-size-[100%_100%,100%_100%]"
      />

      <header className="z-2 space-y-4">
        <SectionTitle
          id="principles-section-title"
          aria-describedby="principles-section-description"
          className="animate-header opacity-0"
        >
          A lógica por trás <br className="xl:hidden" /> de cada solução
        </SectionTitle>


        <SectionDescription
          id="principles-section-description"
          className="3xl:max-w-[48vw] mx-auto max-w-155 xl:max-w-226.5 animate-header opacity-0"
        >
          Antes da tecnologia, existem decisões. É a forma como pensamos cada projeto que torna as
          soluções mais eficientes, escaláveis e preparadas para o futuro.
        </SectionDescription>
      </header>

      <PrinciplesCards />
    </section>
  );
};

export default PrinciplesSection;
