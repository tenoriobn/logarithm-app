import Image from 'next/image';
import { solutionsCards } from './solutionsCards';

const SolutionsCards = () => {
  return (
    <div className="3xl:grid-cols-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {solutionsCards.map((card) => (
        <article key={card.id} className="bg-border-brand rounded-2xl p-0.5 md:rounded-4xl">
          <div className="bg-surface-875 flex h-full flex-col gap-4 rounded-2xl p-4 md:gap-8 md:rounded-4xl md:p-8">
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 md:space-y-8">
              <div className="flex flex-col items-center gap-3">
                <p className="text-gradient text-gradient-brand w-max text-center text-[clamp(.75rem,2.5vw,1rem)] font-semibold uppercase">
                  {card.category}
                </p>

                <h3 className="text-gradient text-gradient-white text-center text-xl text-[clamp(1.25rem,4.5vw,2rem)] font-medium">
                  {card.title}
                </h3>
              </div>

              <p className="text-center text-[clamp(1rem,3.5vw,1.5rem)] text-white/70">
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
