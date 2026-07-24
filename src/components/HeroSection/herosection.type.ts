import type { ReactNode, Ref } from 'react';

export interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  hasBottomGlow?: boolean;
  titleRef?: Ref<HTMLDivElement>;
  descriptionRef?: Ref<HTMLDivElement>;
  titleContent?: ReactNode;
  descriptionContent?: ReactNode;
}
