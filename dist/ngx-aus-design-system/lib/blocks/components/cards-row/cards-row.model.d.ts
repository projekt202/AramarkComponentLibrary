import { ButtonComponentTarget, ButtonComponentVariants } from '../../../shared/components/button/button.component.model';
import { CardComponentVariants } from '../../../shared/components/card/card.model';
import { IconComponentNames } from '../../../shared/components/icon/icon.model';
export declare type CardsRowComponentVariants = 'black' | 'white';
export declare type CardsRowComponentButton = {
    text: string;
    href?: string;
    route?: string;
    target?: ButtonComponentTarget;
    variant: ButtonComponentVariants;
    origin?: string;
};
export declare type CardsRowComponentData = {
    icon: IconComponentNames;
    title: string;
    text: string;
    button?: {
        variant: ButtonComponentVariants;
        target: ButtonComponentTarget;
        text: string;
        href: string;
        origin?: string;
    };
    variant?: CardComponentVariants;
}[];
