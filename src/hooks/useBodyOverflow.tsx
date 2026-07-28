import { useEffect } from 'react';
import { ScrollSmoother } from 'src/lib/gsap';

let lockCount = 0;

export function useBodyOverflow(shouldHide: boolean) {
  useEffect(() => {
    const targetElements = [document.documentElement, document.body];
    const smoother = ScrollSmoother.get();

    if (shouldHide) {
      lockCount++;
      if (lockCount === 1) {
        if (smoother) {
          smoother.paused(true);
        }
        targetElements.forEach((el) => {
          el.style.overflow = 'hidden';
        });
      }
    }

    return () => {
      if (shouldHide) {
        lockCount--;
        if (lockCount === 0) {
          if (smoother) {
            smoother.paused(false);
          }
          targetElements.forEach((el) => {
            el.style.overflow = '';
          });
        }
      }
    };
  }, [shouldHide]);
}
