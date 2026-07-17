import SectionTitle from 'src/components/SectionTitle';
import SolutionsCards from './SolutionsCards';
import SectionDescription from 'src/components/SectionDescription';

const SolutionsSection = () => {
  return (
    <section className="bg-surface-850 3xl:gap-[1.666vw] 3xl:p-[1.666vw] flex min-h-svh flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
      <div className="3xl:space-y-[.833vw] space-y-4">
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
    </section>
  );
};

export default SolutionsSection;
