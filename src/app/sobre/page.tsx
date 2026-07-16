import Image from 'next/image';
import HeroSection from './HeroSection';
import SolutionsSection from './SolutionsSection';
import PrinciplesSection from './PrinciplesSection';

export default function Home() {
  return (
    <>
      <header className="absolute z-1 flex w-full items-center justify-between p-4 md:p-8">
        <Image src="/icons/logo.png" width={24} height={32} alt="Logo do tipo" />

        <button className="flex w-full max-w-14 flex-col gap-1.5">
          <span className="bg-surface-400 relative h-0.75 rounded-full" />
          <span className="bg-surface-400 relative h-0.75 rounded-full" />
        </button>
      </header>

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SolutionsSection />
        <PrinciplesSection />
      </main>
      <footer className="bg-yellow-500">Footer - Sobre</footer>
    </>
  );
}
