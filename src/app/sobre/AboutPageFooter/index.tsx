'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import Link from 'next/link';
import SectionTitle from '../../../components/SectionTitle';
import SectionDescription from '../../../components/SectionDescription';
import ArrowIcon from 'public/icons/arrow.svg';
import FooterInfo from 'src/components/FooterInfo';

const AboutPageFooter = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.animate-cta-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 40%',
            end: 'top 5%',
            scrub: 0.8,
          },
        }
      );

      gsap.fromTo(
        '.animate-footer-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer-content-wrapper',
            start: 'top 95%',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="outer bg-surface-950 xs:grid-rows-[1fr_auto_1fr] 3xl:px-[1.666vw] 3xl:py-[1.666vw] 3xl:pb-[1.666vw]! relative grid min-h-svh w-full grid-rows-[1fr_auto] overflow-hidden px-4 py-4 pb-4! md:px-8 md:py-8 md:pb-8!"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,41)_5%,rgba(14,31,41,0)_30%,rgba(14,31,41,0.13)_80%,rgba(14,31,41)_98%)]"
      />

      <div className="max-xs:hidden" />

      <section
        aria-labelledby="cta-section-title"
        className="inner max-xs:mb-4 relative z-2 flex w-full flex-col items-center justify-center"
      >
        <SectionTitle
          id="cta-section-title"
          aria-describedby="cta-section-description"
          className="animate-cta-item opacity-0"
        >
          A próxima lógica pode <br className="xl:hidden" /> ser a do seu negócio.
        </SectionTitle>

        <SectionDescription
          id="cta-section-description"
          className="3xl:max-w-[50vw] animate-cta-item 3xl:mt-[0.833vw] mx-auto mt-4 max-w-172 opacity-0 xl:max-w-240"
        >
          Cada empresa possui uma realidade diferente. É por isso que construímos soluções sob
          medida, alinhadas aos desafios, processos e objetivos de cada operação.
        </SectionDescription>

        <Link
          href="https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações."
          target="_blank"
          rel="noopener noreferrer"
          className="border-brand-600 bg-button-brand btn-animated-gradient transition-default 3xl:gap-[0.833vw] 3xl:p-[.417vw] 3xl:pl-[1.666vw] 3xl:text-[1.25vw] animate-cta-item 3xl:mt-[1.666vw] mt-4 flex items-center justify-center gap-4 rounded-full border p-2 pl-8 font-medium text-white/75 opacity-0 shadow-[0px_4px_24px_0px_rgba(54,123,162,0.12)] active:scale-90! md:mt-8 md:text-2xl"
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

      <FooterInfo className="footer-content-wrapper relative z-2 self-end w-full" navAriaLabel="Rodapé" itemClassName="animate-footer-item opacity-0" />
    </footer>
  );
};

export default AboutPageFooter;
