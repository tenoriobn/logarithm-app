import HeroSection from './HeroSection';
import SolutionsSection from './SolutionsSection';
import PrinciplesSection from './PrinciplesSection';
import Header from 'src/components/Header';
import SmoothScrolling from 'src/components/SmoothScrollProvider';
import AboutPageFooter from './AboutPageFooter';

export default function Sobre() {
  return (
    <SmoothScrolling>
      <Header />

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SolutionsSection />
        <PrinciplesSection />
      </main>

      <AboutPageFooter />
    </SmoothScrolling>
  );
}
