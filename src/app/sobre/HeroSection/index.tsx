import SectionTitle from 'src/components/SectionTitle';
import HeroBackground from './HeroBackground';
import SectionDescription from 'src/components/SectionDescription';

const HeroSection = () => {
  return (
    <section className="bg-surface-950 3xl:px-[1.666vw] 3xl:py-[6.667vw] relative flex min-h-svh flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
      <HeroBackground />

      <header className="3xl:gap-[.833vw] z-2 flex flex-col gap-4">
        <SectionTitle id="hero-section-title">Por trás de toda solução</SectionTitle>

        <SectionDescription id="hero-section-description" className="max-sm:max-w-[288px]">
          Existe uma forma de pensar, decidir e construir.
          <br className="hidden sm:max-xl:block" /> É isso que você encontrará nesta página.
        </SectionDescription>
      </header>
    </section>
  );
};

export default HeroSection;
