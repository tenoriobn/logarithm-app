import Link from 'next/link';
import { SOCIAL_LINK } from './socialLink';

const Footer = () => {
  return (
    <footer className="relative z-2 row-start-3 mt-auto w-full self-end">
      <nav className="3xl:mb-[1.666vw] 3xl:gap-[0.833vw] mb-4 flex justify-center gap-4 md:mb-8 lg:justify-end">
        {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
          <Link
            key={ariaLabel}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="transition-default hover:opacity-75 active:scale-90"
          >
            <Icon
              className="3xl:h-[1.875vw] 3xl:w-[1.875vw] h-9 w-9"
              aria-hidden="true"
              focusable="false"
            />
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-between gap-4 max-lg:flex-col">
        <div className="max-xs:flex-col 3xl:gap-[0.833vw] flex gap-2 md:gap-4">
          <button className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90">
            Política de Privacidade
          </button>

          <button className="3xl:text-[1.042vw] transition-default text-[clamp(1rem,3.5vw,1.25rem)] text-white/75 hover:opacity-75 active:scale-90">
            Exclusão de Dados
          </button>
        </div>

        <small className="3xl:text-[1.042vw] text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
          © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
          <br className="xs:hidden" /> All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
