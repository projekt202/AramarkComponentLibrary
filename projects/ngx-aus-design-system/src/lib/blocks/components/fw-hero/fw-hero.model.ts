import { ButtonComponentVariants } from '../../../shared/components/button/button.component.model';
import {
  IconComponentNames,
  IconComponentVariants,
} from '../../../shared/components/icon/icon.model';

export type FwHeroVariant = 'card' | 'blur' | 'transparency';

export type FwHeroCardVariants = 'white' | 'black' | 'transparent';

export type FwHeroBannerVariants = 'white' | 'black';

export type FwHeroCardPosition = 'left' | 'right';

export type FwHeroTextColor = 'white' | 'black';

export type FwHeroCard = {
  title: string;
  gradient?: boolean;
  text?: string;
  icon?: {
    name: IconComponentNames;
    variant?: IconComponentVariants;
  };
  variant: FwHeroCardVariants;
  button?: {
    text: string;
    route?: string;
    href?: string;
    variant?: ButtonComponentVariants;
    origin?: string;
  };
  buttonSecondary?: {
    text: string;
    route?: string;
    href?: string;
    variant?: ButtonComponentVariants;
    origin?: string;
  };
  position?: FwHeroCardPosition;
  onlyMobileSecondaryBtn?: boolean;
};

export type FwHeroBanner = {
  text?: string;
  variant: FwHeroBannerVariants;
  centered?: boolean;
  button?: {
    text: string;
    route?: string;
    href?: string;
    variant?: ButtonComponentVariants;
    origin?: string;
  };
  primaryBtnOnlyMobile?: boolean;
  buttonSecondary?: {
    text: string;
    route?: string;
    href?: string;
    variant?: ButtonComponentVariants;
    origin?: string;
  };
  onlyMobileSecondaryBtn?: boolean;
};
