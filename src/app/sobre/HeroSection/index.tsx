import SectionTitle from 'src/components/SectionTitle';
import HeroBackground from './HeroBackground';
import SectionDescription from 'src/components/SectionDescription';

const HeroSection = () => {
  return (
    <section className="bg-surface-950 3xl:px-[1.666vw] 3xl:py-[6.667vw] relative flex min-h-svh flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
      <HeroBackground />

      <header className="max-lg:gap-4 z-2 flex w-full flex-col items-center @container lg:items-end">
        <SectionTitle id="hero-section-title" className="uppercase font-aboro leading-[16.32cqw]! w-full text-[16.32cqw]!">logarithm</SectionTitle>

        <SectionDescription id="hero-section-description" className="max-sm:max-w-[288px] w-max">
          Entenda como transformamos <br className="hidden sm:max-md:block" /> desafios em soluções digitais.
        </SectionDescription>
      </header>
    </section>
  );
};

export default HeroSection;
