'use client';
import Image from 'next/image';
import { useState } from 'react';

const HeroBackground = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      <Image
        src="/images/frame-hero-section.avif"
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
        className={`object-cover object-center mix-blend-color-dodge brightness-[0.5] transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'} `}
      />

      {/* <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 h-full w-full object-cover object-[calc(81%+120px)_center] mix-blend-color-dodge brightness-[0.4] transition-opacity duration-700 md:object-[calc(84%+120px)_center] xl:object-center ${videoReady ? 'opacity-100' : 'opacity-0'} `}
      >
        <source src="/videos/about-hero-section.webm" type="video/webm" />
        <source src="/videos/about-hero-section.mp4" type="video/mp4" />
      </video> */}

      <div
        aria-hidden
        className="bg-brand-650 3xl:h-[9.787vw] 3xl:w-[9.787vw] 3xl:top-[-2.499vw] 3xl:left-[-2.499vw] 3xl:blur-[4.792vw] pointer-events-none absolute -top-12 -left-12 h-47 w-47 rounded-full blur-[92px]"
      />

      <div
        aria-hidden
        className="bg-brand-650 3xl:h-[9.787vw] 3xl:w-[9.787vw] 3xl:bottom-[-2.499vw] 3xl:left-[-2.499vw] 3xl:blur-[4.792vw] pointer-events-none absolute -bottom-12 -left-12 h-47 w-47 rounded-full blur-[92px]"
      />

      <div
        aria-hidden
        className="absolute h-full w-full bg-[linear-gradient(180deg,rgba(14,31,41,.8)_0%,rgba(14,31,41,.13)_30%,rgba(14,31,41,0)_50%,rgba(14,31,41,.13)_70%,rgba(14,31,41,1)_98%)]"
      />
    </>
  );
};

export default HeroBackground;
