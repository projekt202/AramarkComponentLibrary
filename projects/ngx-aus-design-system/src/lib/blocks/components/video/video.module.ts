import { StatementCardModule } from "../../../shared/components/statement-card/statement-card.module";
import {
  TippyModule,
  tooltipVariation,
  popperVariation,
} from "@ngneat/helipopper";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { VideoComponent } from "./video.component";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    YouTubePlayerModule,
    TippyModule.forRoot({
      defaultVariation: "tooltip",
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
  providers: [],
  exports: [VideoComponent],
})
export class VideoModule {}
