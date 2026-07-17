import SectionTitle from 'src/components/SectionTitle';
import { principlesCards } from './principlesCards';
import SectionDescription from 'src/components/SectionDescription';

const PrinciplesSection = () => {
  return (
    <section className="bg-surface-875 3xl:gap-[1.666vw] 3xl:p-[1.666vw] flex flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
      <div className="space-y-4">
        <SectionTitle id="hero-section-title">
          A lógica por trás <br className="xl:hidden" /> de cada solução
        </SectionTitle>

        <SectionDescription
          id="hero-section-description"
          className="3xl:max-w-[48vw] mx-auto max-w-155 xl:max-w-226.5"
        >
          Antes da tecnologia, existem decisões. É a forma como pensamos cada projeto que torna as
          soluções mais eficientes, escaláveis e preparadas para o futuro.
        </SectionDescription>
      </div>

      <div className="3xl:gap-[1.666vw] grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 2xl:grid-cols-12">
        {principlesCards.map((card, index) => (
          <article
            key={card.id}
            className={`border-brand-675 bg-brand-725 3xl:rounded-[1.666vw] 3xl:p-[1.666vw] 3xl:border-[0.139vw] rounded-2xl border-2 p-4 md:rounded-4xl md:p-8 ${
              index === 0
                ? '2xl:col-span-7'
                : index === 1
                  ? '2xl:col-span-5'
                  : index === 2
                    ? '2xl:col-span-5'
                    : '2xl:col-span-7'
            } `}
          >
            <p className="text-gradient text-gradient-white 3xl:text-[2.916vw] 3xl:mb-[1.666vw] mb-4 w-max text-[clamp(1.5rem,7.5vw,3.5rem)] font-medium md:mb-8">
              {card.number}
            </p>

            <h3 className="text-gradient text-gradient-white 3xl:text-[1.666vw] 3xl:mb-[.833vw] mb-2 w-max text-[clamp(1.25rem,4.5vw,2rem)] font-medium md:mb-4">
              {card.title}
            </h3>

            <p className="3xl:text-[1.25vw] text-[clamp(1rem,3.5vw,1.5rem)] text-white/70">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;
