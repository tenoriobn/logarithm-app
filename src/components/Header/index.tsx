'use client';
import { useRef, useState, useEffect } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import Menu from './Menu';
import { useBodyOverflow } from 'src/hooks/useBodyOverflow';
import LogoIcon from 'public/icons/logo.svg';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useBodyOverflow(isMenu);

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ nextType: string }>;
      setIsLightMode(customEvent.detail?.nextType === 'white');
    };

    window.addEventListener('sectionTransition', handleTransition);

    return () => window.removeEventListener('sectionTransition', handleTransition);
  }, []);

  useGSAP(
    () => {
      const elements = headerRef.current?.querySelectorAll('.header-anim');

      const playAnim = (isFromPreloader = false) => {
        if (!elements) {
          return;
        }

        if (isFromPreloader) {
          const logo = headerRef.current?.querySelector('#header-logo');
          const otherElements = Array.from(elements).filter((el) => el !== logo);

          // Se veio do preloader, a logo já deve aparecer instantaneamente e no lugar final
          if (logo) {
            gsap.set(logo, { opacity: 1, y: 0 });
          }
          // Os demais botões caem normalmente
          if (otherElements.length > 0) {
            gsap.fromTo(
              otherElements,
              { opacity: 0, y: -30 },
              { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
            );
          }
        } else {
          gsap.fromTo(
            elements,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
          );
        }
      };

      const hasLoaded =
        typeof window !== 'undefined' &&
        (window as Window & { hasPreloaderRun?: boolean }).hasPreloaderRun;
      if (hasLoaded) {
        playAnim(false);
      } else {
        window.addEventListener('preloaderComplete', () => playAnim(true), { once: true });
      }
    },
    { scope: headerRef }
  );

  const spanColor = !isMenu && isLightMode ? 'bg-surface-950' : 'bg-surface-400';
  const logoColor = !isMenu && isLightMode ? 'text-surface-950' : 'text-surface-400';

  return (
    <header
      ref={headerRef}
      className="3xl:p-[1.666vw] absolute z-2000 flex w-full items-center justify-between p-4 md:p-8"
    >
      <div id="header-logo" className="header-anim opacity-0">
        <LogoIcon
          className={`3xl:h-[1.666vw] h-8 w-8 transition-colors duration-300 ${logoColor}`}
        />
      </div>

      <div className="header-anim 3xl:w-[2.499vw] relative z-50 flex w-10 items-center justify-center opacity-0 md:w-12">
        <button
          onClick={() => setIsMenu(!isMenu)}
          className="3xl:h-[0.627vw] relative z-2001 flex h-3 w-full flex-col justify-center opacity-75 transition-all duration-300 hover:opacity-100 active:scale-90"
        >
          <span
            className={`${spanColor} 3xl:h-[.157vw] absolute h-0.75 w-full rounded-full transition-all duration-300 ease-out ${
              isMenu ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`${spanColor} 3xl:h-[.157vw] absolute h-0.75 w-full rounded-full transition-all duration-300 ease-out ${
              isMenu ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
            }`}
          />
        </button>
      </div>

      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
    </header>
  );
};

export default Header;
