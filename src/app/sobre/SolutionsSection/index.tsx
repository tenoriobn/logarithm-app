import SectionTitle from 'src/components/SectionTitle';
import SolutionsCards from './SolutionsCards';
import SectionDescription from 'src/components/SectionDescription';

const SolutionsSection = () => {
  return (
    <section className="bg-surface-850 shrink-0 relative z-20 ">
      <div id="solutions-pin-target" className="3xl:gap-[1.666vw]  flex min-h-svh flex-col items-center gap-4 md:gap-8 w-full py-4 md:py-8 3xl:py-[1.666vw]">
        <div className="3xl:space-y-[.833vw] space-y-4 shrink-0 3xl:px-[1.666vw] px-4 md:px-8">
          <SectionTitle id="hero-section-title">Onde fazemos diferença</SectionTitle>

          <SectionDescription
            id="hero-section-description"
            className="3xl:max-w-[58vw] max-w-176 xl:max-w-270"
          >
            Nem toda solução começa com código. Muitas começam ao identificar processos ineficientes,
            sistemas desconectados e oportunidades que impedem um negócio de evoluir.
          </SectionDescription>
        </div>

        <SolutionsCards />
      </div>
    </section>
  );
};

export default SolutionsSection;
