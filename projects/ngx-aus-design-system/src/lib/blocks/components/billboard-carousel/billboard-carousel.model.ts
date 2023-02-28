import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import {
  BillboardComponentBtn,
  BillboardComponentColumn,
  BillboardComponentType,
  BillboardComponentVariant,
} from "../billboard/billboard.component.model";

export type BillboardCarouselSlide = {
  variant: BillboardComponentVariant;
  type: BillboardComponentType;
  column: BillboardComponentColumn;
  imgUrl: string;
  iconName?: IconComponentNames;
  header: string;
  bodyText: string;
  btn?: BillboardComponentBtn;
};

export type BillboardCarouselVariants = "white" | "black" | "gray";
