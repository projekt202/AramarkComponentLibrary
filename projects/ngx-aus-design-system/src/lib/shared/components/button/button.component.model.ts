export type ButtonComponentVariants =
  | 'white'
  | 'black'
  | 'red'
  | 'transparent'
  | 'outline';

export type ButtonComponentTarget = '_blank' | '_parent' | '_self' | '_top';

export type ButtonConfig = {
  variant?: ButtonComponentVariants;
  title: string;
  url: string;
  target?: ButtonComponentTarget;
  origin?: string;
};
