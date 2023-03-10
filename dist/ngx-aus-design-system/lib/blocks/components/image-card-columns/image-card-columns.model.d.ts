import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { IconConfig } from "../../../shared/components/icon/icon.model";
export declare type ImageCardColumnsItem = {
    imgUrl?: string;
    icon?: IconConfig;
    title?: string;
    pretitle?: string;
    text?: string;
    btn?: ButtonConfig;
    secondaryBtn?: ButtonConfig;
};
export declare type ImageCardColumnsBg = "white" | "gray" | "black";
