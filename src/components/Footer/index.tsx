'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import Link from 'next/link';
import { SOCIAL_LINK } from './socialLink';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

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
              start: 'top 95%',
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
    <footer ref={footerRef} className="bg-surface-850 3xl:p-[1.666vw] p-4 md:p-8 relative">
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
    </footer>
  );
};

export default Footer;