'use client';
import { forwardRef } from 'react';
import HeroBackground from './HeroBackground';
import SectionTitle from 'src/components/SectionTitle';
import SectionDescription from 'src/components/SectionDescription';
import type { HeroSectionProps } from './herosection.type';

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className = '',
      hasBottomGlow = false,
      titleRef,
      descriptionRef,
      titleContent = 'logarithm',
      descriptionContent,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        aria-labelledby="hero-section-title"
        className={`bg-surface-950 3xl:px-[1.666vw] 3xl:py-[4.998vw] relative flex min-h-svh w-full flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24 ${className}`}
        {...props}
      >
        <HeroBackground hasBottomGlow={hasBottomGlow} />

        <header className="@container z-2 flex w-full flex-col items-center max-lg:gap-4 lg:items-end">
          <SectionTitle
            ref={titleRef}
            id="hero-section-title"
            aria-describedby="hero-section-description"
            className="font-aboro w-full text-[16.32cqw]! leading-[16.32cqw]! uppercase opacity-0"
          >
            {titleContent}
          </SectionTitle>

          <SectionDescription
            id="hero-section-description"
            className="w-max opacity-0 max-sm:max-w-[288px]"
            ref={descriptionRef}
          >
            {descriptionContent}
          </SectionDescription>
        </header>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
