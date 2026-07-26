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
              start: 'top 70%',
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
    <section
      ref={sectionRef}
      aria-labelledby="solutions-section-title"
      className="bg-surface-850 relative"
    >
      <div
        id="solutions-pin-target"
        className="3xl:gap-[1.666vw] 3xl:py-[1.666vw] flex min-h-svh w-full flex-col items-center gap-4 py-4 md:gap-8 md:py-8"
      >
        <header className="3xl:space-y-[.833vw] 3xl:px-[1.666vw] shrink-0 space-y-4 px-4 md:px-8">
          <SectionTitle
            id="solutions-section-title"
            aria-describedby="solutions-section-description"
            className="animate-header opacity-0"
          >
            Onde fazemos diferença
          </SectionTitle>

          <SectionDescription
            id="solutions-section-description"
            className="3xl:max-w-[58vw] animate-header max-w-176 opacity-0 xl:max-w-270"
          >
            Nem toda solução começa com código. Muitas começam ao identificar processos
            ineficientes, sistemas desconectados e oportunidades que impedem um negócio de evoluir.
          </SectionDescription>
        </header>

        <SolutionsCards />
      </div>
    </section>
  );
};

export default SolutionsSection;
