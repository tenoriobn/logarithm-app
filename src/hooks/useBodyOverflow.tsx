import { useEffect } from 'react';
import { ScrollSmoother } from 'src/lib/gsap';

export function useBodyOverflow(shouldHide: boolean) {
  useEffect(() => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.paused(shouldHide);
    }

    const targetElements = [document.documentElement, document.body];
    targetElements.forEach((el) => {
      el.style.overflow = shouldHide ? 'hidden' : '';
    });

    return () => {
      if (smoother) {
        smoother.paused(false);
      }

      targetElements.forEach((el) => {
        el.style.overflow = '';
      });
    };
  }, [shouldHide]);
}
