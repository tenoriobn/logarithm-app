'use client';
import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useGSAP, ScrollSmoother, ScrollTrigger } from 'src/lib/gsap';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      ScrollTrigger.config({
        ignoreMobileResize: true,
      });

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,

        smooth: 2,
        smoothTouch: 1.5,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      return () => smoother.kill();
    },
    { scope: wrapperRef }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTop(0);
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
