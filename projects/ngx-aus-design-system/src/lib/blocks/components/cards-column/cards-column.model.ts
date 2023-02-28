import { IconComponentNames } from "../../../shared/components/icon/icon.model";

export type CardsColumnComponentVariants = "black" | "white";

export type CardsColumnComponentLayout = "2" | "3";

export type CardsColumnComponentData = {
  icon?: IconComponentNames;
  title: string;
  text: string;
}[];

export type CardsColumnComponentBtn = {
  text: string;
  href?: string;
  route?: string;
  origin?: string;
};
