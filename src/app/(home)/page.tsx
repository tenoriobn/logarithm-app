'use client';
import Header from 'src/components/Header';
import { useRef } from 'react';
import { gsap, useGSAP, Observer } from 'src/lib/gsap';
import HomeHero from './HomeHero';
import ServicesSlide from './ServicesSlide';
import TextSection from 'src/components/TextSection';
import HomePageFooter from './HomePageFooter';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mainSections = gsap.utils.toArray<HTMLElement>('.slide-section', mainRef.current);
    const sections = [...mainSections, footerRef.current].filter(Boolean) as HTMLElement[];
    const headings = sections.map((section) =>
      section.querySelector<HTMLElement>('.section-heading')
    );
    const animatedItems = sections.map((section) =>
      gsap.utils.toArray<HTMLElement>(section.querySelectorAll('.animate-item'))
    );

    let currentIndex = -1;
    const wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;

    const outers = sections.map((s) => s.querySelector('.outer')).filter(Boolean);
    const inners = sections.map((s) => s.querySelector('.inner')).filter(Boolean);

    const getSectionType = (sec: HTMLElement | null, idx: number) => {
      if (!sec) {
        return 'text';
      }
      if (idx === 0) {
        return 'hero';
      }
      if (idx === 2) {
        return 'white';
      }
      if (idx === sections.length - 1) {
        return 'footer';
      }
      if (sec.innerHTML.includes('conic-gradient')) {
        return 'services';
      }
      return 'text';
    };

    gsap.set(outers, { yPercent: 100 });
    gsap.set(inners, { yPercent: -100 });
    gsap.set(sections, {
      visibility: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    });

    function gotoSection(index: number, direction: number) {
      index = wrap(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut', force3D: true },
        onComplete: () => {
          animating = false;
        },
      });

      const currentSection = currentIndex >= 0 ? sections[currentIndex] : null;
      const nextSection = sections[index];

      const currentType =
        currentIndex >= 0 ? getSectionType(currentSection, currentIndex) : 'unknown';
      const nextType = getSectionType(nextSection, index);
      const isDifferentBg =
        currentIndex >= 0 &&
        (currentType !== nextType || (currentType === 'services' && nextType === 'services'));

      const nextOuter = nextSection?.querySelector('.outer');
      const nextInner = nextSection?.querySelector('.inner');

      if (currentSection) {
        gsap.set(currentSection, { zIndex: 0 });
      }

      gsap.set(nextSection, { autoAlpha: 1, zIndex: 1, visibility: 'visible' });

      const isEnteringWhiteSection = index === 2 && (currentIndex === 1 || currentIndex === 3);
      const isLeavingWhiteSection = currentIndex === 2 && (index === 1 || index === 3);

      if (isEnteringWhiteSection && currentSection) {
        gsap.set(currentSection, { zIndex: 2 });
        gsap.set(nextSection, { zIndex: 1 });
        if (nextOuter && nextInner) {
          gsap.set([nextOuter, nextInner], { yPercent: 0 });
        }
        tl.to(currentSection, { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' }, 1.0);
      } else if (isLeavingWhiteSection && currentSection) {
        gsap.set(currentSection, { zIndex: 2 });
        gsap.set(nextSection, { zIndex: 1 });
        if (nextOuter && nextInner) {
          gsap.set([nextOuter, nextInner], { yPercent: 0 });
        }

        tl.to(currentSection, { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' }, 0);
      } else if (isDifferentBg && currentSection) {
        if (fromTop) {
          gsap.set(currentSection, { zIndex: 1 });
          gsap.set(nextSection, { zIndex: 2, autoAlpha: 0 });
          if (nextOuter && nextInner) {
            gsap.set([nextOuter, nextInner], { yPercent: 0 });
          }
          tl.to(nextSection, { autoAlpha: 1, duration: 1.25, ease: 'power2.inOut' }, 0);
          tl.set(currentSection, { autoAlpha: 0 }, 1.25);
        } else {
          gsap.set(currentSection, { zIndex: 2 });
          gsap.set(nextSection, { zIndex: 1 });
          if (nextOuter && nextInner) {
            gsap.set([nextOuter, nextInner], { yPercent: 0 });
          }
          tl.to(currentSection, { autoAlpha: 0, duration: 1.25, ease: 'power2.inOut' }, 0);
        }
      } else {
        // Transição normal
        if (nextOuter && nextInner) {
          tl.fromTo(
            [nextOuter, nextInner],
            {
              yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
            },
            {
              yPercent: 0,
            },
            0
          );
        }

        if (currentSection) {
          tl.set(currentSection, { autoAlpha: 0 }, 1.25);
        }
      }

      const currentHeading = currentIndex >= 0 ? headings[currentIndex] : null;
      const currentItems = currentIndex >= 0 ? animatedItems[currentIndex] : [];

      if (currentHeading) {
        if (isEnteringWhiteSection) {
          let tOrigin = '50% 50%';
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          let zoomTarget = currentHeading.querySelector('.zoom-origin');
          if (isMobile) {
            zoomTarget = currentHeading.querySelector('.zoom-origin-mobile') || zoomTarget;
          } else {
            zoomTarget = currentHeading.querySelector('.zoom-origin-desktop') || zoomTarget;
          }
          if (zoomTarget) {
            const hRect = currentHeading.getBoundingClientRect();
            const targetRect = zoomTarget.getBoundingClientRect();
            const strokeOffsetX = targetRect.width * 0.8;
            const strokeOffsetY = targetRect.height * 0.5;

            const centerX = targetRect.left + strokeOffsetX - hRect.left;
            const centerY = targetRect.top + strokeOffsetY - hRect.top;

            const ox = (centerX / hRect.width) * 100;
            const oy = (centerY / hRect.height) * 100;
            tOrigin = `${ox}% ${oy}%`;
          }

          const maxScale = typeof window !== 'undefined' ? window.innerWidth * 1.5 : 2500;

          tl.to(
            currentHeading,
            {
              scale: maxScale,
              duration: 1.5,
              ease: 'power3.inOut',
              transformOrigin: tOrigin,
              force3D: false,
            },
            0
          );
        } else {
          tl.to(
            currentHeading,
            {
              autoAlpha: 0,
              scale: 1.08,
              y: -20 * dFactor,
              filter: 'blur(6px)',
              duration: 1,
              ease: 'power2.inOut',
            },
            0
          );
        }
      }

      if (currentItems.length > 0) {
        tl.to(
          currentItems,
          {
            autoAlpha: 0,
            scale: 0.95,
            y: -20 * dFactor,
            filter: 'blur(6px)',
            duration: 0.8,
            stagger: 0.03,
            ease: 'power2.inOut',
          },
          0
        );
      }

      const heading = headings[index];
      const items = animatedItems[index];

      if (heading) {
        if (isEnteringWhiteSection) {
          tl.fromTo(
            heading,
            {
              autoAlpha: 0,
              scale: 0.9,
              y: 30,
              filter: 'blur(6px)',
            },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.1,
              ease: 'power2.out',
            },
            0.5
          );
        } else if (isLeavingWhiteSection) {
          gsap.set(heading, { scale: 1 });

          let tOrigin = '50% 50%';
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          let zoomTarget = heading.querySelector('.zoom-origin');
          if (isMobile) {
            zoomTarget = heading.querySelector('.zoom-origin-mobile') || zoomTarget;
          } else {
            zoomTarget = heading.querySelector('.zoom-origin-desktop') || zoomTarget;
          }
          if (zoomTarget) {
            const hRect = heading.getBoundingClientRect();
            const targetRect = zoomTarget.getBoundingClientRect();
            const strokeOffsetX = targetRect.width * 0.8;
            const strokeOffsetY = targetRect.height * 0.5;

            const centerX = targetRect.left + strokeOffsetX - hRect.left;
            const centerY = targetRect.top + strokeOffsetY - hRect.top;

            const ox = (centerX / hRect.width) * 100;
            const oy = (centerY / hRect.height) * 100;
            tOrigin = `${ox}% ${oy}%`;
          }

          const maxScale = typeof window !== 'undefined' ? window.innerWidth * 1.5 : 2500;
          gsap.set(heading, {
            scale: maxScale,
            transformOrigin: tOrigin,
            autoAlpha: 1,
            filter: 'none',
          });

          tl.to(
            heading,
            {
              scale: 1,
              duration: 1.5,
              ease: 'power3.inOut',
              force3D: false,
            },
            0
          );
        } else {
          tl.fromTo(
            heading,
            {
              autoAlpha: 0,
              scale: 1.08,
              y: 20 * dFactor,
              filter: 'blur(6px)',
            },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.1,
              ease: 'power2.out',
            },
            1
          );
        }
      }

      if (items.length > 0) {
        tl.fromTo(
          items,
          {
            autoAlpha: 0,
            scale: 0.95,
            y: 30 * dFactor,
            filter: 'blur(6px)',
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            stagger: 0.1,
            ease: 'power2.out',
          },
          1.2
        );
      }

      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('sectionTransition', {
            detail: { duration: 1.25, currentType, nextType },
          })
        );
      }

      currentIndex = index;
    }

    Observer.create({
      target: window,
      type: 'wheel,touch',
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);

    return () => {
      Observer.getAll().forEach((obs) => obs.kill());
    };
  });

  return (
    <>
      <Header />

      <main ref={mainRef} className="relative h-svh w-full overflow-hidden">
        <HomeHero />
        <TextSection>
          Toda empres<span className="zoom-origin-desktop">a</span> <br className="md:hidden" /> pod
          <span className="zoom-origin-mobile">e</span> crescer. <br />
          Mas poucas estão <br className="md:hidden" /> preparadas para isso.
        </TextSection>
        <TextSection variant="light">
          Porque crescer <br className="xs:hidden" /> muda tudo
        </TextSection>
        <TextSection>
          E, sem <span className="zoom-origin">e</span>strutura, <br />
          a complexidade <br className="xs:hidden" /> cresce junto.
        </TextSection>
        <TextSection>É aqui que começamos...</TextSection>
        <ServicesSlide />
        <TextSection>
          Cada negócio possui <br className="md:hidden" /> uma lógica própria.
        </TextSection>
        <TextSection>
          Por isso não construímos <br className="lg:hidden" /> soluções genéricas.
        </TextSection>
        <TextSection>
          Construímos a <br className="md:hidden" /> tecnologia que{' '}
          <br className="hidden md:max-lg:block" /> faz <br className="md:hidden" /> sentido{' '}
          <br className="hidden lg:block" />
          para o próximo <br className="lg:hidden" /> passo do seu negócio.
        </TextSection>
      </main>

      <HomePageFooter ref={footerRef} />
    </>
  );
}
