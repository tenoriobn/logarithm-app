import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FooterInfo from 'src/components/FooterInfo';
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
                  className={`transition-default inline-block ${
                    isActive ? 'text-white/90' : 'text-white/50 hover:opacity-70 active:scale-90'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </nav>

        <FooterInfo
          showCopyright={false}
          className="z-2 flex w-full flex-col items-center self-end"
          itemClassName="animate-item"
          navAriaLabel="Links secundários do menu"
        />
      </div>
    </>
  );
};

export default Menu;
