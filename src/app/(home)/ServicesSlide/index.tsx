'use client';
import Image from 'next/image';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import { servicesSlides } from './servicesSlides';
import { useGSAP, gsap } from 'src/lib/gsap';

const ServicesSlide = () => {
  useGSAP(() => {
    const handleTransition = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { duration, currentType, nextType } = customEvent.detail;

      // Aciona a transição premium e super leve ao entrar/sair de serviços
      if (currentType === 'services' || nextType === 'services') {
        const images = document.querySelectorAll('.service-img');
        const tl = gsap.timeline();

        // Efeito "Spatial Warp / Momentum Pull":
        // Substituímos os filtros de desfoque/SVG por distorção espacial pura (scale + skew).
        // Isso zera completamente qualquer lag no Chrome porque não exige re-rasterização de textura,
        // apenas transformação de vértices acelerada 100% pela GPU.
        tl.to(images, {
          scale: 1.35,
          skewX: 4, // Cria a sensação de "arraste/derretimento" lateral
          skewY: -2, // Adiciona profundidade ao arraste
          duration: duration / 2,
          ease: 'power2.in',
          force3D: true,
        }).to(images, {
          scale: 1.12,
          skewX: 0,
          skewY: 0,
          duration: duration / 2,
          ease: 'power2.out',
          force3D: true,
        });
      }
    };

    window.addEventListener('sectionTransition', handleTransition);
    return () => window.removeEventListener('sectionTransition', handleTransition);
  });

  return (
    <>
      {servicesSlides.map((slide) => (
        <section key={slide.id} className="slide-section z-0">
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner h-full w-full">
              <div className="bg-brand-650/60 3xl:px-[1.666vw] 3xl:py-[4.998vw] relative flex h-full w-full flex-col items-center justify-end overflow-hidden bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,2,7,0.7)_0deg,rgba(0,2,7,0.7)_264.02deg,rgba(0,2,7,0.7)_360deg)] px-4 py-16 text-center md:px-8 md:py-24">
                <Image
                  src={slide.image}
                  alt=""
                  aria-hidden
                  fill
                  preload
                  fetchPriority="high"
                  loading="eager"
                  quality={100}
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1440px) 1400px,
                    1920px
                  "
                  className="service-img scale-[1.12] object-cover object-center mix-blend-color-dodge brightness-[0.5] transition-opacity duration-700"
                  style={{ willChange: 'transform, filter' }}
                />

                <SectionTitle className="section-heading 3xl:mb-[1.666vw] z-2 mb-4 md:mb-8">
                  {slide.title}
                </SectionTitle>

                <SectionDescription className="animate-item 3xl:max-w-[53.93vw] z-2 max-w-264">
                  {slide.description}
                </SectionDescription>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServicesSlide;
