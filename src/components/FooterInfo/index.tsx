'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LEGAL_LINKS, MAIS_EU_LEGAL_LINKS, SOCIAL_LINK } from './socialLink';
import type { FooterInfoProps } from './footerInfo.type';

export default function FooterInfo({
  className = 'relative self-end w-full',
  itemClassName = 'animate-item',
  navAriaLabel = 'Rodapé',
  showCopyright = true,
}: FooterInfoProps) {
  const pathname = usePathname();
  const currentLinks = pathname?.startsWith('/mais-eu') ? MAIS_EU_LEGAL_LINKS : LEGAL_LINKS;

  return (
    <nav aria-label={navAriaLabel} className={className}>
      <ul
        aria-label="Redes sociais"
        className="3xl:mb-[1.666vw] 3xl:gap-[0.833vw] mb-4 flex justify-center gap-4 md:mb-8 lg:justify-end"
      >
        {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
          <li key={ariaLabel} className={itemClassName}>
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

      <div
        className={`flex items-center gap-4 max-lg:flex-col ${
          showCopyright ? 'justify-between' : 'justify-center'
        }`}
      >
        <ul
          aria-label="Links secundários"
          className="max-xs:flex-col 3xl:gap-[0.833vw] flex flex-wrap items-center justify-center gap-2 md:gap-4"
        >
          {currentLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className={itemClassName}>
                <Link
                  href={href}
                  className={`3xl:text-[1.042vw] transition-default inline-block text-[clamp(1rem,3.5vw,1.25rem)] ${
                    isActive ? 'text-white/90' : 'text-white/50 hover:opacity-75 active:scale-90'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {showCopyright && (
          <div className={itemClassName}>
            <small className="3xl:text-[1.042vw] block text-center text-[clamp(1rem,3.5vw,1.25rem)] text-white/75">
              © {new Date().getFullYear()} Logarithm <span className="max-xs:hidden">—</span>
              <br className="xs:hidden" /> All rights reserved
            </small>
          </div>
        )}
      </div>
    </nav>
  );
}
