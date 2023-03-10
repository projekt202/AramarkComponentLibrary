import { ButtonComponentTarget, ButtonComponentVariants } from '../button/button.component.model';
export declare type CardComponentVariants = 'white' | 'transparent' | 'gray' | 'left-aligned-white' | 'left-aligned-black';
export declare type CardComponentButton = {
    text: string;
    route?: string;
    href?: string;
    target?: ButtonComponentTarget;
    variant?: ButtonComponentVariants;
    origin?: string;
};
