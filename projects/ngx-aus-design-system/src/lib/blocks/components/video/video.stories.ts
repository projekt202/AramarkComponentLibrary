import { Story, Meta, moduleMetadata } from "@storybook/angular";
import {
  TippyModule,
  tooltipVariation,
  popperVariation,
} from "@ngneat/helipopper";
import { YouTubePlayerModule } from "@angular/youtube-player";

import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { VideoComponent } from "./video.component";

export default {
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, SanitizePipe],
      imports: [
        YouTubePlayerModule,
        TippyModule.forRoot({
          defaultVariation: "tooltip",
          variations: {
            tooltip: tooltipVariation,
            popper: popperVariation,
          },
        }),
      ],
    }),
  ],
  component: VideoComponent,
  title: "Video",
} as Meta;

const Template: Story<VideoComponent> = (args: VideoComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  topBackground: "white",
  bottomBackground: "black",
  controls: true,
  src: "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4",
  title: "ARAMARK FLEXFITᵀᴹ",
  italics: true,
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const AutoplayMutedLoop = Template.bind({});
AutoplayMutedLoop.args = {
  topBackground: "white",
  bottomBackground: "black",
  autoplay: true,
  muted: true,
  controls: true,
  loop: {
    start: 4,
    end: 6,
  },
  src: "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const InvertedBackgroundColors = Template.bind({});
InvertedBackgroundColors.args = {
  topBackground: "black",
  bottomBackground: "white",
  src: "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const YoutubeEmbed = Template.bind({});
YoutubeEmbed.args = {
  topBackground: "white",
  bottomBackground: "black",
  controls: true,
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const YoutubeEmbedCustom = Template.bind({});
YoutubeEmbedCustom.args = {
  topBackground: "white",
  bottomBackground: "black",
  autoplay: true,
  muted: true,
  controls: true,
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const GrayToWhite = Template.bind({});
GrayToWhite.args = {
  topBackground: "gray",
  bottomBackground: "white",
  autoplay: true,
  muted: true,
  controls: true,
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const BlackToGray = Template.bind({});
BlackToGray.args = {
  topBackground: "black",
  bottomBackground: "gray",
  autoplay: true,
  muted: true,
  controls: true,
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const GrayToWhite16x9 = Template.bind({});
GrayToWhite16x9.args = {
  topBackground: "gray",
  bottomBackground: "white",
  autoplay: true,
  muted: true,
  controls: true,
  aspectRatio: "16:9",
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const GrayToWhite4x3 = Template.bind({});
GrayToWhite4x3.args = {
  topBackground: "gray",
  bottomBackground: "white",
  autoplay: true,
  muted: true,
  controls: true,
  aspectRatio: "4:3",
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const GrayToWhite1x1 = Template.bind({});
GrayToWhite1x1.args = {
  topBackground: "gray",
  bottomBackground: "white",
  autoplay: true,
  muted: true,
  controls: true,
  aspectRatio: "1:1",
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const GrayToWhite9x16 = Template.bind({});
GrayToWhite9x16.args = {
  topBackground: "gray",
  bottomBackground: "white",
  autoplay: true,
  muted: true,
  controls: true,
  aspectRatio: "9:16",
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const GrayToWhite21x9 = Template.bind({});
GrayToWhite21x9.args = {
  topBackground: "gray",
  bottomBackground: "white",
  autoplay: true,
  muted: true,
  controls: true,
  aspectRatio: "21:9",
  loop: {
    start: 20,
    end: 22,
  },
  youtubeId: "https://www.youtube.com/watch?v=WhY7uyc56ms",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};

export const brandFolderIframe = Template.bind({});
brandFolderIframe.args = {
  topBackground: "white",
  bottomBackground: "black",
  autoplay: true,
  muted: true,
  controls: true,
  brandFolderIframeId: "2hfkk4njcqvt35p392gbqt5",
  title: "ARAMARK FLEXFITᵀᴹ",
  videoDescription:
    "This is a video description best practice under the AA compliance. You can use as many lines you want...",
};
