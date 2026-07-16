import Link from 'next/link';
import ArrowIcon from 'public/icons/arrow.svg';

const CallToActionSection = () => {
  return (
    <section className="bg-surface-950 flex min-h-svh flex-col items-center justify-center gap-4 px-4 py-16 md:gap-8 md:px-8 md:py-24">
      <div
        aria-hidden
        className="absolute h-full w-full bg-[linear-gradient(180deg,#102531_0%,rgba(14,31,41,0.132212)_20%,rgba(14,31,41,0)_50%,rgba(14,31,41,0.13)_80%,rgba(14,31,41,0.7)_100%),linear-gradient(0deg,#080F15,#080F15)] bg-size-[100%_100%,100%_100%]"
      />

      <div className="z-2 space-y-4">
        <h2 className="text-gradient text-gradient-white text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
          A próxima lógica pode <br className="xl:hidden" /> ser a do seu negócio.
        </h2>
        <p className="text-gradient text-gradient-white mx-auto max-w-176 text-center text-[clamp(1rem,3vw,1.5rem)] xl:max-w-237">
          Cada empresa possui uma realidade diferente. É por isso que construímos soluções sob
          medida, alinhadas aos desafios, processos e objetivos de cada operação.
        </p>
      </div>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações."
        className="border-brand-600 bg-button-brand z-2 flex items-center justify-center gap-4 rounded-full border p-2 pl-8 font-medium text-white/75 md:text-2xl"
      >
        Iniciar uma conversa
        <div className="border-brand-500/25 bg-brand-700 flex items-center justify-center rounded-full border p-3 md:p-4">
          <ArrowIcon className="h-4 w-4 md:h-6 md:w-6" />
        </div>
      </Link>
    </section>
  );
};

export default CallToActionSection;
