import { forwardRef } from 'react';
import Link from 'next/link';
import { SOCIAL_LINK } from 'src/constants/socialLink';
import ArrowIcon from 'public/icons/arrow.svg';

const HomePageFooter = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="slide-section invisible fixed inset-0 z-0">
      <div className="outer bg-surface-950 xs:grid-rows-[1fr_auto_1fr] 3xl:px-[1.666vw] 3xl:py-[4.998vw] 3xl:pb-[1.666vw]! relative grid h-full w-full grid-rows-[1fr_auto] overflow-hidden px-4 py-16 pb-4! md:px-8 md:py-24 md:pb-8!">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,41,1)_0%,rgba(14,31,41,0.132212)_20%,rgba(14,31,41,0)_50%,rgba(14,31,41,0.13)_80%,rgba(14,31,41,0.7)_100%)]"
        />

        <div className="max-xs:hidden" />

        <section
          aria-labelledby="cta-section-title"
          className="inner 3xl:gap-[1.666vw] max-xs:mb-4 relative flex w-full flex-col items-center justify-center gap-4 md:gap-8"
        >
          <h2
            id="cta-section-title"
            className="section-heading text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)]"
          >
            Vamos construir a próxima transformação?
          </h2>

          <Link
            href="https://wa.me/5591719041?text=Olá!%20Conheci%20a%20Logarithm%20e%20gostaria%20de%20receber%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="border-brand-500/25 bg-button-surface transition-default 3xl:gap-[0.833vw] 3xl:p-[.417vw] 3xl:pl-[1.666vw] 3xl:text-[1.25vw] animate-item btn-animated-gradient z-2 flex items-center justify-center gap-4 rounded-full border p-2 pl-8 font-medium text-white/75 opacity-0 shadow-[0px_4px_24px_0px_rgba(54,123,162,0.12)] [--btn-hover-bg:var(--color-surface-850)] active:scale-90! md:text-2xl"
          >
            <span>Iniciar uma conversa</span>

            <span className="border-brand-500/25 bg-brand-700 3xl:p-[0.833vw] flex items-center justify-center rounded-full border p-3 md:p-4">
              <ArrowIcon
                className="3xl:h-[1.25vw] 3xl:w-[1.25vw] h-4 w-4 md:h-6 md:w-6"
                aria-hidden="true"
                focusable="false"
              />
            </span>
          </Link>
        </section>

        <nav aria-label="Redes sociais" className="relative self-end">
          <ul className="3xl:mb-[1.666vw] 3xl:gap-[0.833vw] mb-4 flex justify-center gap-4 md:mb-8 lg:justify-end">
            {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
              <li key={ariaLabel} className="animate-item">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="transition-default flex hover:opacity-75 active:scale-90"
                >
                  <Icon
                    className="3xl:h-[1.875vw] 3xl:w-[1.875vw] h-9 w-9"
                    aria-hidden="true"
                    focusable="false"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between gap-4 max-lg:flex-col">
            <ul className="max-xs:flex-col 3xl:gap-[0.833vw] flex gap-2 md:gap-4">
              <li className="animate-item">
                <Link
                  href="/politica-de-privacidade"
                  className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90"
                >
                  Política de Privacidade
                </Link>
              </li>

              <li className="animate-item">
                <Link
                  href="/exclusao-de-dados"
                  className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90"
                >
                  Exclusão de Dados
                </Link>
              </li>
            </ul>

            <div className="animate-item">
              <small className="3xl:text-[1.042vw] block text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
                © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
                <br className="xs:hidden" /> All rights reserved
              </small>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
});

HomePageFooter.displayName = 'FooterContent';

export default HomePageFooter;
