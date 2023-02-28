import { FullwidthImageCardColumnsItem } from '../fullwidth-image-card-columns/fullwidth-image-card-columns.model';
import { ImageCardColumnsItem } from '../image-card-columns/image-card-columns.model';

export type TwoColumnWYSIWYGColumn = {
  type: 'image' | 'wysiwyg' | 'card' | 'card-fwimg';
  config: {
    image?: {
      src: string;
      alt?: string;
    };
    wysiwyg?: {
      data: string;
    };
    card?: ImageCardColumnsItem;
    fwimagecard?: FullwidthImageCardColumnsItem;
  };
};
