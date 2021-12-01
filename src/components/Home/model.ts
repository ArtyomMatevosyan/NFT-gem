export type HomeHowItWorksStepProps = {
  stepDescription?: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type HomeFAQItemProps = {
  question: string;
  className: string;
  answer?: string;
};
