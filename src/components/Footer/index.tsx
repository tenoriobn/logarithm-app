'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import Link from 'next/link';
import { SOCIAL_LINK } from './socialLink';
import ArrowIcon from 'public/icons/arrow.svg';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
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
              start: 'top 90%',
              end: 'center center',
              scrub: 0.8,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );


  useGSAP(
    () => {
      const animateElements = footerRef.current?.querySelectorAll('.animate-item');

      if (animateElements) {
        gsap.fromTo(
          animateElements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 78%',
              end: 'bottom bottom',
              scrub: 0.8,
            },
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer className='grid xl:grid-rows-[1fr_auto_1fr] xl:min-h-svh bg-surface-950 relative 3xl:p-[1.666vw] p-4 md:p-8 gap-4 md:gap-8 3xl:gap-[1.666vw]'>
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,41)_5%,rgba(14,31,41,0)_30%,rgba(14,31,41,0.13)_80%,rgba(14,31,41)_98%)]"
      />

      <div className='hidden xl:block' />

      <section
        ref={sectionRef}
        className="3xl:gap-[1.666vw] flex flex-col items-center justify-center gap-4 md:gap-8 z-2 max-xl:min-h-svh"
      >
        <div className="3xl:space-y-[0.833vw] space-y-4">
          <div className="animate-item opacity-0">
            <SectionTitle id="cta-section-title">
              A próxima lógica pode <br className="xl:hidden" /> ser a do seu negócio.
            </SectionTitle>
          </div>

          <div className="animate-item opacity-0">
            <SectionDescription
              id="cta-section-description"
              className="3xl:max-w-[50vw] mx-auto max-w-172 xl:max-w-240"
            >
              Cada empresa possui uma realidade diferente. É por isso que construímos soluções sob
              medida, alinhadas aos desafios, processos e objetivos de cada operação.
            </SectionDescription>
          </div>
        </div>

        <div className="animate-item opacity-0">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações."
            className="border-brand-600 bg-button-brand button-brand-animated transition-default 3xl:gap-[0.833vw] 3xl:p-[.417vw] 3xl:pl-[1.666vw] 3xl:text-[1.25vw] flex items-center justify-center gap-4 rounded-full border p-2 pl-8 font-medium text-white/75 active:scale-90 md:text-2xl"
          >
            Iniciar uma conversa
            <div className="border-brand-500/25 bg-brand-700 3xl:p-[0.833vw] flex items-center justify-center rounded-full border p-3 md:p-4">
              <ArrowIcon className="3xl:h-[1.25vw] 3xl:w-[1.25vw] h-4 w-4 md:h-6 md:w-6" />
            </div>
          </Link>
        </div>
      </section>


      <div ref={footerRef} className="relative z-2 content-end">
        <nav className="3xl:mb-[1.666vw] 3xl:gap-[0.833vw] mb-4 flex justify-center gap-4 md:mb-8 lg:justify-end">
          {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
            <div key={ariaLabel} className="animate-item opacity-0">
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="transition-default hover:opacity-75 active:scale-90 flex"
              >
                <Icon
                  className="3xl:h-[1.875vw] 3xl:w-[1.875vw] h-9 w-9"
                  aria-hidden="true"
                  focusable="false"
                />
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-between gap-4 max-lg:flex-col">
          <div className="max-xs:flex-col 3xl:gap-[0.833vw] flex gap-2 md:gap-4">
            <div className="animate-item opacity-0">
              <button className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90">
                Política de Privacidade
              </button>
            </div>

            <div className="animate-item opacity-0">
              <button className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90">
                Exclusão de Dados
              </button>
            </div>
          </div>

          <div className="animate-item opacity-0">
            <small className="3xl:text-[1.042vw] text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 block">
              © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
              <br className="xs:hidden" /> All rights reserved
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
