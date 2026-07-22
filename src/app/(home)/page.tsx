'use client';
import Header from 'src/components/Header';
import { useRef } from 'react';
import { gsap, useGSAP, Observer } from 'src/lib/gsap';
import HeroSection from './HeroSection';
import Link from 'next/link';
import ArrowIcon from 'public/icons/arrow.svg';
import { SOCIAL_LINK } from 'src/components/Footer/socialLink';
import ServicesSlide from './ServicesSlide';

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
      type: 'wheel,touch,pointer',
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
        <section className="slide-section relative z-10 h-full w-full">
          <HeroSection />
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-950 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                Toda empresa <br className="md:hidden" /> pode crescer. <br />
                Mas poucas estão <br className="md:hidden" /> preparadas para isso.
              </h2>
            </div>
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-100 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-surface 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                Porque crescer <br className="xs:hidden" /> muda tudo
              </h2>
            </div>
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-950 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                E, sem estrutura, <br />
                a complexidade <br className="xs:hidden" /> cresce junto.
              </h2>
            </div>
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-950 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                É aqui que começamos...
              </h2>
            </div>
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <ServicesSlide />
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-950 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                Cada negócio possui <br className="md:hidden" /> uma lógica própria.
              </h2>
            </div>
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-950 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                Por isso não construímos <br className="lg:hidden" /> soluções genéricas.
              </h2>
            </div>
          </div>
        </section>

        <section className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner bg-surface-950 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
              <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
                Construímos a <br className="md:hidden" /> tecnologia que{' '}
                <br className="hidden md:max-lg:block" /> faz <br className="md:hidden" /> sentido{' '}
                <br className="hidden lg:block" />
                para o próximo <br className="lg:hidden" /> passo do seu negócio.
              </h2>
            </div>
          </div>
        </section>
      </main>

      <footer ref={footerRef} className="slide-section z-0">
        <div className="outer bg-surface-950 3xl:p-[1.666vw] relative grid h-full w-full grid-rows-[1fr_auto_1fr] overflow-hidden p-4 md:p-8">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,41,1)_0%,rgba(14,31,41,0.132212)_20%,rgba(14,31,41,0)_50%,rgba(14,31,41,0.13)_80%,rgba(14,31,41,0.7)_100%)]"
          />

          <div />

          <div className="inner 3xl:p-[1.666vw] 3xl:gap-[1.666vw] relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden p-4 md:gap-8 md:p-8">
            <h2 className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]">
              Vamos construir a próxima transformação?
            </h2>

            <Link
              href="https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="border-brand-600 bg-button-brand button-brand-animated transition-default 3xl:gap-[0.833vw] 3xl:p-[.417vw] 3xl:pl-[1.666vw] 3xl:text-[1.25vw] animate-item z-2 flex items-center justify-center gap-4 rounded-full border p-2 pl-8 font-medium text-white/75 opacity-0 active:scale-90! md:text-2xl"
            >
              <span>Iniciar uma conversa</span>

              <span className="border-brand-500/25 bg-brand-700 3xl:p-[0.833vw] flex items-center justify-center rounded-full border p-3 md:p-4">
                <ArrowIcon
                  className="3xl:h-[1.25vw] 3xl:w-[1.25vw] h-4 w-4 md:h-6 md:w-6"
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </Link>
          </div>

          <div className="relative self-end">
            <nav className="3xl:mb-[1.666vw] 3xl:gap-[0.833vw] mb-4 flex justify-center gap-4 md:mb-8 lg:justify-end">
              {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
                <div key={ariaLabel} className="animate-item">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    className="transition-default flex hover:opacity-75 active:scale-90"
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
                <div className="animate-item">
                  <Link
                    href="/politica-de-privacidade"
                    className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90"
                  >
                    Política de Privacidade
                  </Link>
                </div>

                <div className="animate-item">
                  <Link
                    href="/exclusao-de-dados"
                    className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90"
                  >
                    Exclusão de Dados
                  </Link>
                </div>
              </div>

              <div className="animate-item">
                <small className="3xl:text-[1.042vw] block text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
                  © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
                  <br className="xs:hidden" /> All rights reserved
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
