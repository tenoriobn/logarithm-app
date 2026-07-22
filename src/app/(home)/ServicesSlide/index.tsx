import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { servicesSlides } from './servicesSlides';

const ServicesSlide = () => {
  const swiperPaginationStyles = [
    '[&_.swiper-pagination]:bottom-0!',
    '[&_.swiper-pagination]:mb-16!',
    'md:[&_.swiper-pagination]:mb-24!',
    '3xl:[&_.swiper-pagination]:mb-[4.998vw]!',
    '[&_.swiper-pagination]:flex',
    '[&_.swiper-pagination]:justify-center',
    '[&_.swiper-pagination]:gap-2',
    'md:[&_.swiper-pagination]:gap-4',
    '3xl:[&_.swiper-pagination]:gap-[.833vw]',
  ].join(' ');

  const swiperBulletStyles = [
    '[&_.swiper-pagination-bullet]:z-999!',
    '[&_.swiper-pagination-bullet]:m-0!',
    '[&_.swiper-pagination-bullet]:cursor-pointer!',
    '[&_.swiper-pagination-bullet]:bg-white!',
    '[&_.swiper-pagination-bullet]:h-4!',
    '[&_.swiper-pagination-bullet]:w-4!',
    'md:[&_.swiper-pagination-bullet]:h-6!',
    'md:[&_.swiper-pagination-bullet]:w-6!',
    '3xl:[&_.swiper-pagination-bullet]:h-[1.25vw]!',
    '3xl:[&_.swiper-pagination-bullet]:w-[1.25vw]!',
  ].join(' ');

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      effect={'fade'}
      modules={[Pagination, EffectFade]}
      className={`mySwiper inner h-full w-full ${swiperPaginationStyles} ${swiperBulletStyles}`}
    >
      {servicesSlides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="bg-brand-650/60 3xl:px-[1.666vw] 3xl:py-[4.998vw] relative flex! h-full w-full flex-col items-center justify-end overflow-hidden bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,2,7,0.7)_0deg,rgba(0,2,7,0.7)_264.02deg,rgba(0,2,7,0.7)_360deg)] px-4 py-16 text-center md:px-8 md:py-24"
        >
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
            className="object-cover object-center mix-blend-color-dodge brightness-[0.5] transition-opacity duration-700"
          />

          <SectionTitle className="3xl:mb-[1.666vw] z-2 mb-4 md:mb-8">{slide.title}</SectionTitle>

          <SectionDescription className="3xl:mb-[3.332vw] 3xl:max-w-[53.93vw] z-2 mb-4 max-w-264 md:mb-16">
            {slide.description}
          </SectionDescription>

          <div className="3xl:h-[1.25vw] h-4 w-full shrink-0 md:h-6" aria-hidden="true" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlide;
