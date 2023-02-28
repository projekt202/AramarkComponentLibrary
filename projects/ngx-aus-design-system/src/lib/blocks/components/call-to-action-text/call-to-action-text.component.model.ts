import {
  ButtonComponentVariants,
  ButtonComponentTarget,
} from "../../../shared/components/button/button.component.model";

export type CallToActionTextButton = {
  text: string;
  href: string;
  variant: ButtonComponentVariants;
  target: ButtonComponentTarget;
  origin?: string;
};

export type CallToActionTextComponentVariant =
  | "with-body-text"
  | "without-body-text"
  | "bg-img";

export type CallToActionTextComponentType = "dark" | "light";

export type CallToActionTextAlignment =
  | "center"
  | "left"
  | "left-alt"
  | "right-alt"
  | "center-alt";
