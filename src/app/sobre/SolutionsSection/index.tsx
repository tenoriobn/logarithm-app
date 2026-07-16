import SolutionsCards from './SolutionsCards';

const SolutionsSection = () => {
  return (
    <section className="bg-surface-850 flex flex-col items-center gap-4 px-4 py-16 md:gap-8 md:px-8 md:py-24">
      <div className="space-y-4">
        <h2 className="text-gradient text-gradient-white text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
          Onde fazemos diferença
        </h2>
        <p className="text-gradient text-gradient-white max-w-[704] text-center text-[clamp(1rem,3vw,1.5rem)] xl:max-w-270">
          Nem toda solução começa com código. Muitas começam ao identificar processos ineficientes,
          sistemas desconectados e oportunidades que impedem um negócio de evoluir.
        </p>
      </div>

      <SolutionsCards />
    </section>
  );
};

export default SolutionsSection;
