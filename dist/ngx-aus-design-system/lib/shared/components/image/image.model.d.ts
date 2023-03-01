export declare type ImageVariant = 'image' | 'background';
declare type ImageBreakpointDimenions = {
    width: string;
    height: string;
};
export declare type ImageBackgroundDimensions = {
    mobile: ImageBreakpointDimenions;
    tablet: ImageBreakpointDimenions;
    desktop: ImageBreakpointDimenions;
};
export declare type ImageRoundedCorners = {
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
};
export declare type ImageCaption = {
    text: string;
    subtitle?: string;
};
export declare type Image = {
    imageUrl: string;
    alt: string;
    title?: string;
};
export declare type ImageBackgroundVariants = 'black' | 'white' | 'gray';
export {};
