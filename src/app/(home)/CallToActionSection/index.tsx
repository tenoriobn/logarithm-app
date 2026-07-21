'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import Link from 'next/link';
import ArrowIcon from 'public/icons/arrow.svg';

const CallToActionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const animateElements = sectionRef.current?.querySelectorAll('.animate-item');

      if (animateElements) {
        gsap.fromTo(
          animateElements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 40%',
              end: 'top 5%',
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
      aria-labelledby="cta-section-title"
      className="bg-surface-950 3xl:gap-[1.666vw] 3xl:p-[1.666vw] flex min-h-svh lg:min-h-[calc(100svh-162px)] 3xl:min-h-[calc(100svh-8.434vw)] lg:pt-40.5 3xl:pt-[8.434vw] flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8 relative"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,41)_5%,rgba(14,31,41,0)_30%,rgba(14,31,41,0.13)_80%,rgba(14,31,41)_98%)]"
      />

      <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
        Vamos construir a próxima transformação?
      </h2>

      <Link
        href="https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        className="border-brand-600 bg-button-brand button-brand-animated transition-default 3xl:gap-[0.833vw] 3xl:p-[.417vw] 3xl:pl-[1.666vw] 3xl:text-[1.25vw] animate-item flex items-center justify-center gap-4 rounded-full border p-2 pl-8 font-medium text-white/75 opacity-0 active:scale-90! md:text-2xl z-2"
      >
        <span>Iniciar uma conversa</span>

        <span className="border-brand-500/25 bg-brand-700 3xl:p-[0.833vw] flex items-center justify-center rounded-full border p-3 md:p-4">
          <ArrowIcon
            className="3xl:h-[1.25vw] 3xl:w-[1.25vw] h-4 w-4 md:h-6 md:w-6"
            aria-hidden="true"
            focusable="false"
          />
        </span>
      </Link>
    </section>
  );
};

export default CallToActionSection;
