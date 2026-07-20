'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import SectionTitle from 'src/components/SectionTitle';
import SolutionsCards from './SolutionsCards';
import SectionDescription from 'src/components/SectionDescription';

const SolutionsSection = () => {
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
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-surface-850 shrink-0 relative z-20">
      <div id="solutions-pin-target" className="3xl:gap-[1.666vw]  flex min-h-svh flex-col items-center gap-4 md:gap-8 w-full py-4 md:py-8 3xl:py-[1.666vw]">
        <div className="3xl:space-y-[.833vw] space-y-4 shrink-0 3xl:px-[1.666vw] px-4 md:px-8">
          <div className="animate-header opacity-0">
            <SectionTitle id="hero-section-title">Onde fazemos diferença</SectionTitle>
          </div>

          <div className="animate-header opacity-0">
            <SectionDescription
              id="hero-section-description"
              className="3xl:max-w-[58vw] max-w-176 xl:max-w-270"
            >
              Nem toda solução começa com código. Muitas começam ao identificar processos ineficientes,
              sistemas desconectados e oportunidades que impedem um negócio de evoluir.
            </SectionDescription>
          </div>
        </div>

        <SolutionsCards />
      </div>
    </section>
  );
};

export default SolutionsSection;
