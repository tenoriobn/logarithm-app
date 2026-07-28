'use client';
import { useRef, useState } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import LogoIcon from 'public/icons/logo.svg';
import { useBodyOverflow } from 'src/hooks/useBodyOverflow';

const Preloader = () => {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window !== 'undefined') {
      return !(window as Window & { hasPreloaderRun?: boolean }).hasPreloaderRun;
    }
    return true;
  });
  useBodyOverflow(shouldRender);

  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const logoInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!shouldRender) {
        return;
      }

      gsap.set(textContainerRef.current, { width: 0 });

      // Promessa da animação inicial
      const animationPromise = new Promise((resolve) => {
        const tlIn = gsap.timeline({
          onComplete: () => resolve(true),
        });

        // A logo surge suavemente do desfoque (flicker corrigido pela classe opacity-0 no HTML)
        tlIn.to(logoRef.current, {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
        });
        tlIn.to(
          textContainerRef.current,
          {
            width: 'auto',
            duration: 1.5,
            ease: 'power3.inOut',
          },
          '+=0.2' // Leve antecipação em relação a antes para fluidez
        );
      });

      // Promessa do carregamento real dos assets da página
      const windowLoadPromise = new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve(true);
        } else {
          window.addEventListener('load', () => resolve(true), { once: true });
        }
      });

      // Quando a animação INICIAL terminar E a página estiver 100% carregada
      Promise.all([animationPromise, windowLoadPromise]).then(() => {
        const tlOut = gsap.timeline({
          onComplete: () => {
            if (typeof window !== 'undefined') {
              (window as Window & { hasPreloaderRun?: boolean }).hasPreloaderRun = true;
            }
            setShouldRender(false);
            window.dispatchEvent(new Event('preloaderComplete'));
          },
        });

        // 1. Ocultar o texto do Preloader
        tlOut.to(textContainerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });

        // 2. Transição final para a logo do Header
        tlOut.add(() => {
          const headerLogo = document.getElementById('header-logo');
          const currentLogo = logoInnerRef.current;

          if (headerLogo && currentLogo) {
            const targetRect = headerLogo.getBoundingClientRect();
            const currentRect = currentLogo.getBoundingClientRect();

            const x = targetRect.left - currentRect.left;
            const y = targetRect.top - currentRect.top;

            const scaleX = targetRect.width / currentRect.width;
            const scaleY = targetRect.height / currentRect.height;

            gsap.to(logoRef.current, {
              x,
              y,
              scaleX,
              scaleY,
              transformOrigin: 'top left',
              duration: 1.2,
              ease: 'power3.inOut',
            });

            gsap.to(bgRef.current, {
              opacity: 0,
              duration: 1.2,
              ease: 'power3.inOut',
            });
          } else {
            // Fallback caso não encontre o header (em outras páginas, por exemplo)
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 1,
              ease: 'power2.inOut',
            });
          }
        });

        // Dá o tempo para as transições do .add() finalizarem antes de disparar o onComplete geral do tlOut
        tlOut.to({}, { duration: 1.5 });
      });
    },
    { scope: containerRef, dependencies: [shouldRender] }
  );

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <style suppressHydrationWarning>{`
        body { overflow: hidden !important; }
      `}</style>
      <div
        ref={containerRef}
        className="pointer-events-none fixed inset-0 z-9999 flex h-svh w-full items-center justify-center"
      >
      <div
        ref={bgRef}
        className="bg-surface-950 pointer-events-auto absolute inset-0 h-full w-full"
      />

      <div className="pointer-events-auto relative z-10 flex items-center justify-center gap-2 md:gap-4">
        <div ref={logoRef} className="shrink-0 origin-top-left opacity-0 blur-md">
          <div ref={logoInnerRef}>
            <LogoIcon className="3xl:h-[1.666vw] text-surface-400 h-12 w-12" />
          </div>
        </div>
        <div ref={textContainerRef} className="w-0 overflow-hidden whitespace-nowrap">
          <div className="pr-1 pl-1">
            <p className="text-gradient text-gradient-white font-aboro relative text-[2rem] md:text-[2.5rem]">
              LOGARITHM
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Preloader;
