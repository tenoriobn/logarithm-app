import Link from 'next/link';
import { SOCIAL_LINK } from './socialLink';

const Footer = () => {
  return (
    <footer className="bg-surface-850 p-4 pt-0 md:p-8 md:pt-0">
      <nav className="mb-4 flex justify-center gap-4 md:mb-8 lg:justify-end">
        {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
          <Link
            key={ariaLabel}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className=""
          >
            <Icon className="h-9 w-9" aria-hidden="true" focusable="false" />
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-between gap-4 max-lg:flex-col">
        <div className="max-xs:flex-col flex gap-2 md:gap-4">
          <button className="text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
            Política de Privacidade
          </button>
          <button className="text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
            Exclusão de Dados
          </button>
        </div>

        <small className="text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
          © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
          <br className="xs:hidden" /> All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
