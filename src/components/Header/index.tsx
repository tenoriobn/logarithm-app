'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const elements = headerRef.current?.querySelectorAll('.header-anim');
      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
      }
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="3xl:p-[1.666vw] absolute z-999 flex w-full items-center justify-between p-4 md:p-8"
    >
      <div className="header-anim opacity-0">
        <Image
          src="/icons/logo.png"
          width={24}
          height={32}
          className="3xl:h-[1.666vw] 3xl:w-[1.25vw] h-8 w-6"
          alt="Logo do tipo"
        />
      </div>

      <button className="header-anim 3xl:max-w-[2.916vw] 3xl:gap-[.313vw] flex w-full max-w-14 flex-col gap-1.5 opacity-0">
        <span className="bg-surface-400 3xl:h-[.157vw] relative h-0.75 rounded-full" />
        <span className="bg-surface-400 3xl:h-[.157vw] relative h-0.75 rounded-full" />
      </button>
    </header>
  );
};

export default Header;
