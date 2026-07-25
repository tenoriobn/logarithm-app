import { forwardRef } from 'react';
import FooterInfo from 'src/components/FooterInfo';

const LegalFooter = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="slide-section bg-surface-gradient-reverse 3xl:p-[1.666vw] 3xl:pt-[6.667vw] p-4 pt-24 md:p-8 md:pt-32"
    >
      <FooterInfo className="relative self-end w-full" navAriaLabel="Rodapé" itemClassName="animate-item" />
    </footer>
  );
});

LegalFooter.displayName = 'FooterContent';

export default LegalFooter;
