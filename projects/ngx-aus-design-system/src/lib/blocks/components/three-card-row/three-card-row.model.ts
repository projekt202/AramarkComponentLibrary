import { IconComponentNames } from "../../../shared/components/icon/icon.model";

export type ThreeCardRowVariants = "black" | "gray" | "white";

export type ThreeCardRowCard = {
  icon?: IconComponentNames;
  title: string;
  text: string;
};
