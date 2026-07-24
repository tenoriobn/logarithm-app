'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import HeroSection from 'src/components/HeroSection';

const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Duração ajustada para ser premium mas responsiva
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

      if (titleRef.current) {
        // Inicializa com blur e invisível
        gsap.set(titleRef.current, { autoAlpha: 0, filter: 'blur(8px)' });

        tl.to(titleRef.current, {
          autoAlpha: 1,
          filter: 'blur(0px)',
          duration: 1.8,
          scrambleText: {
            text: 'logarithm',
            chars: 'upperAndLowerCase',
            revealDelay: 0.2,
            tweenLength: false,
          },
          force3D: true,
        });
      }

      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { autoAlpha: 0, filter: 'blur(6px)' });

        tl.to(
          descriptionRef.current,
          { autoAlpha: 1, filter: 'blur(0px)', duration: 1.5, force3D: true },
          '-=1.2' // Inicia antes do título terminar
        );

        const descSpans = descriptionRef.current.querySelectorAll('.desc-scramble');
        descSpans.forEach((span) => {
          const originalText = span.getAttribute('data-text') || '';
          tl.to(
            span,
            {
              scrambleText: {
                text: originalText,
                chars: 'upperAndLowerCase',
                revealDelay: 0.1,
                tweenLength: false,
              },
              duration: 1.5,
              ease: 'power3.inOut',
            },
            '<' // Sincroniza com o fade-in da descrição
          );
        });
      }

      // --- Observer para resetar e reanimar a seção ao sair e voltar ---
      let wasActive = true; // Na primeira carga, já começa ativa

      const observer = new MutationObserver(() => {
        if (!sectionRef.current) {
          return;
        }
        const style = sectionRef.current.style;

        // Verifica se a seção está visível (GSAP autoAlpha controla opacity e visibility)
        const isVisible = style.visibility !== 'hidden' && style.opacity !== '0';

        if (isVisible && !wasActive) {
          wasActive = true;
          tl.restart(); // Refaz a animação de scramble e blur ao entrar
        } else if (!isVisible && wasActive && style.opacity === '0') {
          wasActive = false;
          tl.pause(0); // Reseta silenciosamente quando termina de sumir
        }
      });

      if (sectionRef.current) {
        observer.observe(sectionRef.current, { attributes: true, attributeFilter: ['style'] });
      }

      return () => observer.disconnect();
    },
    { scope: sectionRef }
  );

  return (
    <HeroSection
      ref={sectionRef}
      className="slide-section z-10 h-full"
      hasBottomGlow={true}
      titleRef={titleRef}
      descriptionRef={descriptionRef}
      descriptionContent={
        <>
          <span className="desc-scramble" data-text="A lógica por trás de ">
            A lógica por trás de{' '}
          </span>
          <br className="sm:hidden" />
          <span className="desc-scramble" data-text="grandes transformações.">
            grandes transformações.
          </span>
        </>
      }
    />
  );
};

export default HomeHero;
