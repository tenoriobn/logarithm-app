'use client';
import Header from 'src/components/Header';
import { useRef } from 'react';
import { gsap, useGSAP, Observer } from 'src/lib/gsap';
import HeroSection from './HeroSection';
import ServicesSlide from './ServicesSlide';
import TextSection from 'src/components/TextSection';
import HomePageFooter from './HomePageFooter';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Prática limpa e recomendada no React: busca os elementos dentro do escopo do main e anexa o footer
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

    // Escopa a seleção de .outer e .inner apenas para as seções deste slider
    const outers = sections.map((s) => s.querySelector('.outer')).filter(Boolean);
    const inners = sections.map((s) => s.querySelector('.inner')).filter(Boolean);

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

      const nextOuter = nextSection?.querySelector('.outer');
      const nextInner = nextSection?.querySelector('.inner');
      const currentOuter = currentSection?.querySelector('.outer');
      const currentInner = currentSection?.querySelector('.inner');

      if (currentSection) {
        gsap.set(currentSection, { zIndex: 0 });
      }

      gsap.set(nextSection, { autoAlpha: 1, zIndex: 1, visibility: 'visible' });

      if (index === 0 && fromTop && currentSection && currentOuter && currentInner) {
        // Quando voltamos para a HeroSection (rolando para cima),
        // não deslizamos a HeroSection para baixo. Em vez disso,
        // deslizamos a seção atual para baixo, revelando a HeroSection embaixo.
        gsap.set(currentSection, { zIndex: 2 });
        gsap.set(nextSection, { zIndex: 1 });

        tl.to(
          [currentOuter, currentInner],
          {
            yPercent: (i) => (i ? -100 : 100),
          },
          0
        ).set(currentSection, { autoAlpha: 0 });
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
          // Oculta a seção anterior APÓS a animação (duração padrão é 1.25s)
          tl.set(currentSection, { autoAlpha: 0 }, 1.25);
        }
      }

      // Animação premium de saída do heading e itens animados atuais
      const currentHeading = currentIndex >= 0 ? headings[currentIndex] : null;
      const currentItems = currentIndex >= 0 ? animatedItems[currentIndex] : [];

      if (currentHeading) {
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
        ); // Inicia imediatamente junto com a transição de seção
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
            stagger: 0.03, // Saída rápida
            ease: 'power2.inOut',
          },
          0
        );
      }

      // Animação premium do heading e itens animados de entrada
      const heading = headings[index];
      const items = animatedItems[index];

      if (heading) {
        tl.fromTo(
          heading,
          {
            autoAlpha: 0,
            scale: 1.08,
            y: 20 * dFactor, // Respeita a direção do scroll
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
            stagger: 0.1, // Efeito escada/cascata (premium)
            ease: 'power2.out',
          },
          1.2
        ); // Cascata: inicia 0.2s depois do texto
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
        <HeroSection />
        <TextSection hasMixBlendScreen={false}>
          Toda empresa <br className="md:hidden" /> pode crescer. <br />
          Mas poucas estão <br className="md:hidden" /> preparadas para isso.
        </TextSection>
        <TextSection variant="light">
          Porque crescer <br className="xs:hidden" /> muda tudo
        </TextSection>
        <TextSection>
          E, sem estrutura, <br />
          a complexidade <br className="xs:hidden" /> cresce junto.
        </TextSection>
        <TextSection>É aqui que começamos...</TextSection>;
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
