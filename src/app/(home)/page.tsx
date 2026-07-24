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
        gsap.set(currentSection, { zIndex: 2 }); // Mantém a tela branca por cima inicialmente
        gsap.set(nextSection, { zIndex: 1 }); // Tela escura entra por baixo
        if (nextOuter && nextInner) {
          gsap.set([nextOuter, nextInner], { yPercent: 0 });
        }
        // Faz o fade out suave da tela branca no início (0 a 0.5s) revelando o texto gigante branco encolhendo por baixo
        tl.to(currentSection, { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' }, 0);
      } else if (isDifferentBg && currentSection) {
        // Transição premium suave entre seções de fundos diferentes (corte não seco)
        if (fromTop) {
          // Rolando para cima: próxima tela (acima) surge em fade por cima da atual
          gsap.set(currentSection, { zIndex: 1 });
          gsap.set(nextSection, { zIndex: 2, autoAlpha: 0 });
          if (nextOuter && nextInner) {
            gsap.set([nextOuter, nextInner], { yPercent: 0 });
          }
          tl.to(nextSection, { autoAlpha: 1, duration: 1.25, ease: 'power2.inOut' }, 0);
          tl.set(currentSection, { autoAlpha: 0 }, 1.25);
        } else {
          // Rolando para baixo: tela atual (acima) desaparece em fade revelando a próxima (abaixo)
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
          // Oculta a seção anterior APÓS a animação (duração padrão é 1.25s)
          tl.set(currentSection, { autoAlpha: 0 }, 1.25);
        }
      }

      // Animação premium de saída do heading e itens animados atuais
      const currentHeading = currentIndex >= 0 ? headings[currentIndex] : null;
      const currentItems = currentIndex >= 0 ? animatedItems[currentIndex] : [];

      if (currentHeading) {
        if (isEnteringWhiteSection) {
          let tOrigin = '50% 50%';
          const zoomTarget = currentHeading.querySelector('.zoom-origin');
          if (zoomTarget) {
            // Em vez de pegar o centro exato (que cai no buraco do 'a'),
            // vamos deslocar para pegar a haste direita e sólida da letra.
            const hRect = currentHeading.getBoundingClientRect();
            const targetRect = zoomTarget.getBoundingClientRect();
            const strokeOffsetX = targetRect.width * 0.8; // 85% para a direita (haste do 'a')
            const strokeOffsetY = targetRect.height * 0.5; // 50% na altura

            const centerX = targetRect.left + strokeOffsetX - hRect.left;
            const centerY = targetRect.top + strokeOffsetY - hRect.top;

            const ox = (centerX / hRect.width) * 100;
            const oy = (centerY / hRect.height) * 100;
            tOrigin = `${ox}% ${oy}%`;
          }

          // Cálculo dinâmico para garantir que a escala seja suficiente para preencher
          // qualquer tamanho de tela, baseado na largura da viewport.
          // Assumindo um traço fino de ~2px, scale de (window.innerWidth) garante cobertura total.
          const maxScale = typeof window !== 'undefined' ? window.innerWidth * 1.5 : 2500;

          tl.to(
            currentHeading,
            {
              scale: maxScale,
              duration: 1.5,
              ease: 'power3.inOut',
              transformOrigin: tOrigin,
              force3D: false, // CRUCIAL: false evita o limite de textura da GPU (que fazia a letra sumir em zooms altos)
            },
            0
          );
        } else if (isLeavingWhiteSection) {
          // REMOVIDO: Nenhuma animação no texto filho, deixamos a seção pai dar o fade out suavemente.
          // Isso elimina qualquer possibilidade do navegador bugar e "piscar" o texto de volta.
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
          ); // Inicia imediatamente junto com a transição de seção
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
          // Reversão limpa e garantida:
          // 1. Reseta para 1 temporariamente só para medir
          gsap.set(heading, { scale: 1 });

          let tOrigin = '50% 50%';
          const zoomTarget = heading.querySelector('.zoom-origin');
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

          // 2. Trava no estado gigante BRANCO *antes* da timeline começar, para o usuário não ver frame vazado
          gsap.set(heading, {
            scale: maxScale,
            transformOrigin: tOrigin,
            autoAlpha: 1,
            filter: 'none',
          });

          // 3. Anima encolhendo suavemente
          tl.to(
            heading,
            {
              scale: 1,
              duration: 1.5,
              ease: 'power3.inOut',
              force3D: false, // 2D nativo infinito
            },
            0
          );
        } else {
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
        <HeroSection />
        <TextSection>
          Toda empres<span className="zoom-origin">a</span> <br className="md:hidden" /> pode
          crescer. <br />
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
