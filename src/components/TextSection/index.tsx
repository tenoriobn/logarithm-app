import type { TextSectionProps } from './textSection.type';

export default function TextSection({
  children,
  variant = 'dark',
  hasMixBlendScreen = true,
}: TextSectionProps) {
  const isLight = variant === 'light';

  return (
    <section className="slide-section z-0">
      <div className={`outer h-full w-full overflow-hidden ${isLight ? 'bg-surface-100' : ''}`}>
        <div
          className={`inner 3xl:p-[1.666vw] relative flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8 ${
            !isLight ? 'bg-surface-950' : ''
          }`}
        >
          <div
            aria-hidden
            className={`pointer-events-none absolute -top-12 -left-12 h-47 w-47 rounded-full opacity-80 blur-[80px] ${
              isLight ? 'bg-surface-950' : 'bg-brand-650'
            } ${hasMixBlendScreen ? 'mix-blend-screen' : ''}`}
          />

          <div
            aria-hidden
            className={`pointer-events-none absolute -right-12 -bottom-12 h-47 w-47 rounded-full opacity-80 blur-[80px] ${
              isLight ? 'bg-surface-950' : 'bg-brand-650'
            } ${hasMixBlendScreen ? 'mix-blend-screen' : ''}`}
          />

          <h2
            className={`section-heading text-gradient 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,2.25rem)] font-medium md:text-[clamp(2.25rem,4vw,3.5rem)] ${
              isLight ? 'text-gradient-surface' : 'text-gradient-white'
            }`}
          >
            {children}
          </h2>
        </div>
      </div>
    </section>
  );
}
