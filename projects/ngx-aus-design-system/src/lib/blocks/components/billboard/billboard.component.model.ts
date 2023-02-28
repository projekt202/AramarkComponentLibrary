import {
  ButtonComponentTarget,
  ButtonComponentVariants,
} from "../../../shared/components/button/button.component.model";

export type BillboardComponentVariant = "right-image" | "left-image";

export type BillboardComponentType = "dark" | "light";

export type BillboardComponentColumn = "50-50" | "3-2";

export type BillboardComponentBtn = {
  text: string;
  href?: string;
  route?: string;
  target?: ButtonComponentTarget;
  variant: ButtonComponentVariants;
  origin?: string;
};
