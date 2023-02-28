import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { IconConfig } from "../../../shared/components/icon/icon.model";

export type ImageCardColumnsItem = {
  imgUrl?: string;
  icon?: IconConfig;
  title?: string;
  pretitle?: string;
  text?: string;
  btn?: ButtonConfig;
  secondaryBtn?: ButtonConfig;
};

export type ImageCardColumnsBg = "white" | "gray" | "black";
