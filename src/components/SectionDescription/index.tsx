import type { SectionDescriptionProps } from './sectionDescription.type';

const SectionDescription = ({ className = '', children, ...props }: SectionDescriptionProps) => {
  return (
    <p
      className={`text-gradient text-gradient-white 3xl:text-[1.25vw] text-center text-[clamp(1rem,3vw,1.5rem)] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default SectionDescription;
