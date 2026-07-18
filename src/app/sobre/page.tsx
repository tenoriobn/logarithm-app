import HeroSection from './HeroSection';
import SolutionsSection from './SolutionsSection';
import PrinciplesSection from './PrinciplesSection';
import CallToActionSection from './CallToActionSection';
import Header from 'src/components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SolutionsSection />
        <PrinciplesSection />
        <CallToActionSection />
      </main>
    </>
  );
}
