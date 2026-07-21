import Header from "src/components/Header";
import SmoothScrolling from "src/components/SmoothScrollProvider";
import HeroSection from "./HeroSection";
import Footer from "src/components/Footer";
import CallToActionSection from "./CallToActionSection";

export default function Home() {
  return (
    <SmoothScrolling>
      <Header />

      <main className="flex flex-1 flex-col">
        <HeroSection />

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">Toda empresa pode crescer. <br />
            Mas poucas estão preparadas para isso.
          </h2>
        </section>

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
            Porque crescer muda tudo
          </h2>
        </section>

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
            E, sem estrutura, <br />
            a complexidade cresce junto.
          </h2>
        </section>

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
            É aqui que começamos...
          </h2>
        </section>

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
            Cada negócio possui uma lógica própria.
          </h2>
        </section>

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
            Por isso não construímos soluções genéricas.
          </h2>
        </section>

        <section className="h-svh bg-surface-950 flex justify-center items-center">
          <h2 className="text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium">
            Construímos a tecnologia que faz sentido <br />
            para o próximo passo do seu negócio.
          </h2>
        </section>

        <CallToActionSection />
      </main>

      <Footer />
    </SmoothScrolling>
  );
}
