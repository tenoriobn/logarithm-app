import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <section className="bg-surface-950 flex min-h-svh flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
      <HeroBackground />

      <header className="z-2 flex flex-col gap-4">
        <h2 className="text-gradient text-gradient-white text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
          Por trás de toda solução
        </h2>

        <p className="text-gradient text-gradient-white text-center text-[clamp(1rem,3vw,1.5rem)] max-sm:max-w-[288px]">
          Existe uma forma de pensar, decidir e construir.
          <br className="hidden sm:max-xl:block" /> É isso que você encontrará nesta página.
        </p>
      </header>
    </section>
  );
};

export default HeroSection;
