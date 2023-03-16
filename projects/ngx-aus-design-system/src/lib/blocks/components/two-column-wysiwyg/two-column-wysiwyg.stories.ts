import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ArrowLinkComponent } from "../../../shared/components/arrow-link/arrow-link.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import {
  ButtonComponentTarget,
  ButtonComponentVariants,
} from "../../../shared/components/button/button.component.model";
import { FullwidthImageCardComponent } from "../../../shared/components/fullwidth-image-card/fullwidth-image-card.component";
import { FullwidthImageCardCta } from "../../../shared/components/fullwidth-image-card/fullwidth-image-card.model";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { SupportCardComponent } from "../../../shared/components/support-card/support-card.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { TwoColumnWysiwygComponent } from "./two-column-wysiwyg.component";

export default {
  title: "Components/Blocks/Two-Column WYSIWYG",
  component: TwoColumnWysiwygComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WysiwygComponent,
        TypographyComponent,
        ImageComponent,
        SupportCardComponent,
        FullwidthImageCardComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        IconComponent,
        ArrowLinkComponent,
      ],
      imports: [LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<TwoColumnWysiwygComponent> = (
  args: TwoColumnWysiwygComponent
) => ({
  props: args,
});

const image = {
  src: "https://api.lorem.space/image?w=600&h=600",
};

const wysiwyg = {
  data: "<div><h4>John Zillmer</h4><h5>Chief Executive Officer</h5></div><p>Enim mollit minim ex culpa tempor elit est culpa do occaecat incididunt dolore. Id do nulla laborum est in ad exercitation excepteur. Reprehenderit enim consequat aliquip incididunt ad officia ipsum deserunt enim. Excepteur pariatur exercitation proident cillum ipsum sit sunt sit. Mollit qui et proident ex eiusmod do. Ex officia dolor id irure ut cupidatat irure duis dolore commodo reprehenderit labore dolore.</p><p>Id laboris consequat tempor cupidatat cillum fugiat voluptate excepteur. Esse aliqua dolor deserunt eu. Adipisicing cillum elit culpa eu fugiat ut nulla dolore ad sit enim do adipisicing dolor.</p>",
};

const card = {
  imgUrl: "https://api.lorem.space/image?w=300&h=300",
  pretitle: "Prospective Customer",
  title: "Talk to a member of our sales team",
  text: "We'll discuss your needs and help you find the right product delivery services for you.",
  btn: {
    target: "_blank" as ButtonComponentTarget,
    title: "Contact Sales",
    url: "https://www.google.com",
    variant: "red" as ButtonComponentVariants,
  },
};

const fwimagecard = {
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  title: "John Zillmer",
  subtitle: "Chief Executive Officer",
  cta: {
    variant: "link" as FullwidthImageCardCta["variant"],
    config: {
      title: "Learn more",
      url: "https://www.google.com",
    },
  },
};

export const ImageWysiwyg = Template.bind({});
ImageWysiwyg.args = {
  left: {
    type: "image",
    config: {
      image,
    },
  },
  right: {
    type: "wysiwyg",
    config: {
      wysiwyg,
    },
  },
};

export const WysiwygImage = Template.bind({});
WysiwygImage.args = {
  right: {
    type: "image",
    config: {
      image,
    },
  },
  left: {
    type: "wysiwyg",
    config: {
      wysiwyg,
    },
  },
};

export const ImageCard = Template.bind({});
ImageCard.args = {
  left: {
    type: "image",
    config: {
      image,
    },
  },
  right: {
    type: "card",
    config: {
      card,
    },
  },
};

export const CardWysiwyg = Template.bind({});
CardWysiwyg.args = {
  left: {
    type: "card",
    config: {
      card,
    },
  },
  right: {
    type: "wysiwyg",
    config: {
      wysiwyg,
    },
  },
};

export const wysiwygFullwidthImageCard = Template.bind({});
wysiwygFullwidthImageCard.args = {
  left: {
    type: "wysiwyg",
    config: {
      wysiwyg,
    },
  },
  right: {
    type: "card-fwimg",
    config: {
      fwimagecard,
    },
  },
};

export const fullwidthImageCardCard = Template.bind({});
fullwidthImageCardCard.args = {
  left: {
    type: "card-fwimg",
    config: {
      fwimagecard,
    },
  },
  right: {
    type: "card",
    config: {
      card,
    },
  },
};
