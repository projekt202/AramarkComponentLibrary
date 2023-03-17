export type ButtonComponentVariants =
  | "white"
  | "black"
  | "red"
  | "transparent"
  | "outline"
  | "primary-brand"
  | "primary-neutral"
  | "secondary"
  | "tertiary";

export type ButtonComponentTarget = "_blank" | "_parent" | "_self" | "_top";

export type ButtonConfig = {
  variant?: ButtonComponentVariants;
  title: string;
  url: string;
  target?: ButtonComponentTarget;
  origin?: string;
};

export type ButtonSizes = "small" | "medium" | "large";
