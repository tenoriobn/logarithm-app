import HeroSection from './HeroSection';
import SolutionsSection from './SolutionsSection';
import PrinciplesSection from './PrinciplesSection';
import CallToActionSection from './CallToActionSection';
import Header from 'src/components/Header';
import SmoothScrolling from 'src/components/SmoothScrollProvider';
import Footer from 'src/components/Footer';

export default function Home() {
  return (
    <SmoothScrolling>
      <Header />

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SolutionsSection />
        <PrinciplesSection />
        <CallToActionSection />
      </main>

      <Footer />
    </SmoothScrolling>
  );
}
