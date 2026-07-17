import type { SectionTitleProps } from './sectionTitle.type';

const SectionTitle = ({ className = '', children, ...props }: SectionTitleProps) => {
  return (
    <h2
      className={`text-gradient text-gradient-white 3xl:text-[2.916vw] text-center text-[clamp(1.5rem,6vw,3.5rem)] font-medium ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
