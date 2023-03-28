export declare type ButtonComponentVariants = "white" | "black" | "red" | "transparent" | "outline" | "primary-brand" | "primary-neutral" | "secondary" | "tertiary";
export declare type ButtonComponentTarget = "_blank" | "_parent" | "_self" | "_top";
export declare type ButtonConfig = {
    variant?: ButtonComponentVariants;
    title: string;
    url: string;
    target?: ButtonComponentTarget;
    origin?: string;
};
export declare type ButtonSizes = "small" | "medium" | "large";
