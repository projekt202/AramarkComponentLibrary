import {
  ButtonComponentTarget,
  ButtonComponentVariants,
} from '../button/button.component.model';

export type CardComponentVariants =
  | 'white'
  | 'transparent'
  | 'gray'
  | 'left-aligned-white'
  | 'left-aligned-black';

export type CardComponentButton = {
  text: string;
  route?: string;
  href?: string;
  target?: ButtonComponentTarget;
  variant?: ButtonComponentVariants;
  origin?: string;
};
