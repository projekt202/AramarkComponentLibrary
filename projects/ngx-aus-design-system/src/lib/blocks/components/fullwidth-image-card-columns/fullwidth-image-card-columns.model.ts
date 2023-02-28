import { FullwidthImageCardCta } from "../../../shared/components/fullwidth-image-card/fullwidth-image-card.model";

export type FullwidthImageCardColumnsItem = {
  imgUrl: string;
  title: string;
  subtitle?: string;
  text?: string;
  cta?: FullwidthImageCardCta;
};

export type FullwidthImageCardColumnsBg =
  | "white"
  | "gray"
  | "black"
  | "transparent";
