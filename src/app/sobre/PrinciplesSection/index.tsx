import { principlesCards } from './principlesCards';

const PrinciplesSection = () => {
  return (
    <section className="bg-surface-875 flex flex-col items-center gap-4 px-4 py-16 md:gap-8 md:px-8 md:py-24">
      <div className="space-y-4">
        <h2 className="text-gradient text-gradient-white text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
          A lógica por trás <br className="xl:hidden" /> de cada solução
        </h2>
        <p className="text-gradient text-gradient-white mx-auto max-w-155 text-center text-[clamp(1rem,3vw,1.5rem)] xl:max-w-226.5">
          Antes da tecnologia, existem decisões. É a forma como pensamos cada projeto que torna as
          soluções mais eficientes, escaláveis e preparadas para o futuro.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 2xl:grid-cols-12">
        {principlesCards.map((card, index) => (
          <article
            key={card.id}
            className={`border-brand-675 bg-brand-725 rounded-2xl border-2 p-4 md:rounded-4xl md:p-8 ${
              index === 0
                ? '2xl:col-span-7'
                : index === 1
                  ? '2xl:col-span-5'
                  : index === 2
                    ? '2xl:col-span-5'
                    : '2xl:col-span-7'
            } `}
          >
            <p className="text-gradient text-gradient-white mb-4 w-max text-[clamp(1.5rem,7.5vw,3.5rem)] font-medium md:mb-8">
              {card.number}
            </p>

            <h3 className="text-gradient text-gradient-white mb-2 w-max text-[clamp(1.25rem,4.5vw,2rem)] font-medium md:mb-4">
              {card.title}
            </h3>

            <p className="text-[clamp(1rem,3.5vw,1.5rem)] text-white/70">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;
