import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SOCIAL_LINK } from 'src/constants/socialLink';
import type { MenuProps } from './menu.type';
import { NAV_LINKS } from './navLink';

const Menu = ({ isMenu, setIsMenu }: MenuProps) => {
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={() => setIsMenu(false)}
        className={`bg-surface-950/90 fixed inset-0 z-30 transition-opacity duration-500 will-change-[opacity] ${
          isMenu ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      <div
        className={`bg-surface-950 3xl:p-[1.666vw] fixed top-0 right-0 z-40 grid h-svh w-full grid-rows-[1fr_auto_1fr] items-center justify-center border-l border-white/5 p-4 transition-transform duration-500 ease-out md:w-[50%] md:p-8 lg:w-max ${
          isMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,41)_5%,rgba(14,31,41,0)_30%,rgba(14,31,41,0.13)_80%,rgba(14,31,41)_98%)]"
        />

        <div />

        <nav className="3xl:text-[1.666vw] 3xl:gap-[1.666vw] relative z-2 flex list-none flex-col items-center gap-4 text-2xl font-medium md:gap-8 md:text-[2rem]">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-opacity hover:opacity-70 ${
                    isActive ? 'text-white/90' : 'text-white/50'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </nav>

        <div className="3xl:gap-[1.25vw] z-2 flex flex-col items-center gap-6 self-end">
          <ul className="3xl:gap-[0.833vw] flex justify-center gap-4 lg:justify-end">
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

          <ul className="3xl:gap-[0.833vw] flex items-center gap-2 max-lg:flex-col md:gap-4">
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
        </div>
      </div>
    </>
  );
};

export default Menu;
