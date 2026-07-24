import { forwardRef } from 'react';
import Link from 'next/link';
import { SOCIAL_LINK } from 'src/constants/socialLink';

const LegalFooter = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="slide-section bg-surface-gradient-reverse 3xl:p-[1.666vw] 3xl:pt-[6.667vw] p-4 pt-24 md:p-8 md:pt-32"
    >
      <div className="relative self-end w-full">
        <nav aria-label="Redes sociais">
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
        </nav>

        <div className="flex items-center justify-between gap-4 max-lg:flex-col">
          <nav aria-label="Links secundários">
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
          </nav>

          <div className="animate-item">
            <small className="3xl:text-[1.042vw] block text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
              © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
              <br className="xs:hidden" /> All rights reserved
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
});

LegalFooter.displayName = 'FooterContent';

export default LegalFooter;
