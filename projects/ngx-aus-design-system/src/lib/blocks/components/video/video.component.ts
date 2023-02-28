import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  VideoLoopConfig,
  VideoBackgroundColors,
  VideoAspectRatio,
  VideoType,
} from "./video.model";
import { DomSanitizer } from "@angular/platform-browser";
import { BrowserService } from "../../../shared/services/browser/browser.service";

@Component({
  selector: "aus-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements AfterViewInit, OnInit {
  @Input() topBackground?: VideoBackgroundColors = "white";
  @Input() bottomBackground?: VideoBackgroundColors = "black";
  @Input() videoType: VideoType = "video_tag";
  @Input() title: string = "";
  @Input() italics?: boolean;
  @Input() src?: string = "";
  @Input() youtubeId?: string = "";
  @Input() videoDescription: string = "";
  @Input() muted?: boolean;
  @Input() controls?: boolean;
  @Input() autoplay?: boolean;
  @Input() loop?: VideoLoopConfig;
  @Input() aspectRatio?: VideoAspectRatio = "16:9";
  @Input() brandFolderIframeId: string = "";

  @ViewChild("video") video?: ElementRef<
    HTMLVideoElement & { removeAllListeners: (e: string) => void }
  >;
  player?: YT.PlayerEvent;

  didClickPlay: boolean = false;
  apiLoaded: boolean = false;
  ytTimeout?: number;

  constructor(
    private browserService: BrowserService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.youtubeId && !this.apiLoaded) {
      const document = this.browserService.getDocument();
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.video) {
      const player = this.video.nativeElement;
      if (this.autoplay) {
        player.play();
      }
      if (this.src && this.loop) {
        const { start, end } = this.loop;
        player.currentTime = start;
        player.play();
        player.addEventListener("timeupdate", () => {
          if (player.currentTime >= end) {
            player.currentTime = start;
          }
        });
      }
    }
  }

  getPopupClasses(): string {
    const classes = ["popup"];
    if (this.bottomBackground === "white") {
      classes.push("popup--black");
    }
    return classes.join(" ");
  }

  play() {
    this.didClickPlay = true;
    if (this.src && this.video) {
      const player = this.video.nativeElement;
      player.currentTime = 0;
      player.removeAllListeners?.("timeupdate");
      if (this.controls !== undefined) {
        player.controls = this.controls;
      }
      player.play();
    }
    if (this.youtubeId && this.player) {
      this.player.target.getIframe().src = this.player.target
        .getIframe()
        .src.replace("&controls=0", `&controls=${this.controls ? 1 : 0}`);
      clearTimeout(this.ytTimeout);
      this.ytSeekTo(this.player, 0);
    }
  }

  ytSeekTo(e: YT.PlayerEvent, time: number) {
    if (!e) return;
    const { target } = e;
    target.seekTo(time, true);
    target.playVideo();
  }

  onReady(e: YT.PlayerEvent) {
    const { target } = e;
    this.player = e;
    if (this.loop && !this.didClickPlay) {
      this.ytSeekTo(e, this.loop.start);
    }
    if (this.muted) {
      target.mute();
    } else {
      target.unMute();
    }
  }

  onStateChange(e: YT.OnStateChangeEvent) {
    const { data } = e;
    // Paused
    if (data === 2) {
      clearTimeout(this.ytTimeout);
    }
    // Playing
    if (data === 1 && this.loop && !this.didClickPlay) {
      var duration = this.loop.end - this.loop.start;
      this.ytTimeout = setTimeout(() => {
        if (this.loop) {
          this.ytSeekTo(e, this.loop.start);
        }
        clearTimeout(this.ytTimeout);
      }, duration * 1000) as unknown as number;
    }
  }

  getYoutubeId() {
    if (!this.youtubeId) return "";

    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = this.youtubeId.match(regExp);
    return match && match[7].length == 11 ? match[7] : "";
  }

  getAspectRatioClass() {
    if (this.aspectRatio) {
      return "video__" + this.aspectRatio.replace(":", "-");
    }
    return "video__16-9";
  }

  sanitize(id: string) {
    let url = `https://brandfolder.com/aramark/attachments/embed/${
      this.brandFolderIframeId
    }?resource_type=Brandfolder&frame=auto&animated=false&loop=${!!this
      .loop}&muted=${this.muted}&autoplay=${this.autoplay}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
