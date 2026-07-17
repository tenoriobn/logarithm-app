import Image from 'next/image';
import { solutionsCards } from './solutionsCards';

const SolutionsCards = () => {
  return (
    <div className="3xl:gap-[1.666vw] grid w-full grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
      {solutionsCards.map((card) => (
        <article
          key={card.id}
          className="bg-border-brand 3xl:rounded-[1.666vw] 3xl:p-[0.139vw] rounded-2xl p-0.5 md:rounded-4xl"
        >
          <div className="bg-surface-875 3xl:gap-[1.666vw] 3xl:rounded-[1.666vw] 3xl:p-[1.666vw] flex h-full flex-col gap-4 rounded-2xl p-4 md:gap-8 md:rounded-4xl md:p-8">
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="3xl:space-y-[1.666vw] space-y-4 md:space-y-8">
              <div className="3xl:gap-[.834vw] flex flex-col items-center gap-3">
                <p className="text-gradient text-gradient-brand 3xl:text-[.833vw] w-max text-center text-[clamp(.75rem,2.5vw,1rem)] font-semibold uppercase">
                  {card.category}
                </p>

                <h3 className="text-gradient text-gradient-white 3xl:text-[1.666vw] text-center text-xl text-[clamp(1.25rem,4.5vw,2rem)] font-medium">
                  {card.title}
                </h3>
              </div>

              <p className="3xl:text-[1.25vw] text-center text-[clamp(1rem,3.5vw,1.5rem)] text-white/70">
                {card.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SolutionsCards;
