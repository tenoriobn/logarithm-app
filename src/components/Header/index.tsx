import Image from 'next/image';

const Header = () => {
  return (
    <header className="3xl:p-[1.666vw] absolute z-1 flex w-full items-center justify-between p-4 md:p-8">
      <Image
        src="/icons/logo.png"
        width={24}
        height={32}
        className="w-6 h-8 3xl:h-[1.666vw] 3xl:w-[1.25vw]"
        alt="Logo do tipo"
      />

      <button className="3xl:max-w-[2.916vw] 3xl:gap-[.417vw] flex w-full max-w-14 flex-col gap-1.5">
        <span className="bg-surface-400 3xl:h-[.209vw] relative h-0.75 rounded-full" />
        <span className="bg-surface-400 3xl:h-[.209vw] relative h-0.75 rounded-full" />
      </button>
    </header>
  );
};

export default Header;
