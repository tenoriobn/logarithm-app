import React from 'react';
import Header from 'src/components/Header';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import SmoothScrolling from 'src/components/SmoothScrollProvider';
import LegalFooter from './LegalFooter';

export const LegalPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScrolling>
      <Header />
      <main className="bg-surface-850 3xl:pb-[.105vw] flex flex-1 flex-col pb-0.5">{children}</main>
      <LegalFooter />
    </SmoothScrolling>
  );
};

export const LegalHeader = ({ title, lastUpdated }: { title: string; lastUpdated: string }) => {
  return (
    <section
      aria-labelledby="legal-section-title"
      className="bg-surface-gradient 3xl:px-[1.666vw] 3xl:py-[6.667vw] px-4 py-24 md:px-8 md:py-32"
    >
      <SectionTitle
        id="legal-section-title"
        aria-describedby="legal-section-description"
        className="animate-header text-[clamp(2rem,6vw,3.5rem)] font-semibold"
      >
        {title}
      </SectionTitle>

      <SectionDescription
        id="legal-section-description"
        className="animate-header 3xl:mt-[.625vw] mt-2"
      >
        <span className="font-semibold">Última atualização:</span> <br className="xs:hidden" />{' '}
        {lastUpdated}
      </SectionDescription>
    </section>
  );
};

export const LegalContent = ({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) => {
  return (
    <section
      aria-label={ariaLabel}
      className="text-gradient text-gradient-white 3xl:px-[1.666vw] 3xl:space-y-[3.332vw] space-y-8 px-4 md:space-y-16 md:px-8"
    >
      {children}
    </section>
  );
};

export const LegalSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section aria-labelledby={id} className="3xl:space-y-[.834vw] space-y-2 md:space-y-4">
      <h2 id={id} className="3xl:text-[1.666vw] text-2xl font-medium md:text-[2rem]">
        {title}
      </h2>
      {children}
    </section>
  );
};

export const LegalParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="3xl:text-[1.25vw] text-base md:text-2xl">{children}</p>;
};

export const LegalList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="3xl:[&>li]:pl-[1.25vw] 3xl:space-y-[.417vw] ml-2 flex flex-col space-y-2 md:ml-4 [&>li]:relative [&>li]:pl-4 md:[&>li]:pl-6 [&>li::before]:absolute [&>li::before]:top-[0.6em] [&>li::before]:left-0 [&>li::before]:h-[0.35em] [&>li::before]:w-[0.35em] [&>li::before]:rounded-full [&>li::before]:bg-white/50 [&>li::before]:content-['']">
      {children}
    </ul>
  );
};

export const LegalListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="3xl:text-[1.25vw] text-base md:text-2xl">{children}</li>;
};
