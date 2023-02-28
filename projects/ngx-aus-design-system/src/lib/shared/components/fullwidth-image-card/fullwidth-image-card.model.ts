import { ButtonConfig } from '../button/button.component.model';

export type FullwidthImageCardCta = {
  variant: 'link' | 'arrow-link';
  config: ButtonConfig & { underline?: boolean };
};
