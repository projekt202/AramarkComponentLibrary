export type ImageVariant = 'image' | 'background';

type ImageBreakpointDimenions = {
  width: string;
  height: string;
};

export type ImageBackgroundDimensions = {
  mobile: ImageBreakpointDimenions;
  tablet: ImageBreakpointDimenions;
  desktop: ImageBreakpointDimenions;
};

export type ImageRoundedCorners = {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

export type ImageCaption = {
  text: string;
  subtitle?: string;
};

export type Image = {
  imageUrl: string,
  alt: string,
  title?: string
}

export type ImageBackgroundVariants = 'black' | 'white' | 'gray';
