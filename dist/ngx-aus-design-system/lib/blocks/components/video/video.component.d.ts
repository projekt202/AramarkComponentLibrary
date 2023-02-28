/// <reference types="youtube" />
import { AfterViewInit, ElementRef, OnInit } from "@angular/core";
import { VideoLoopConfig, VideoBackgroundColors, VideoAspectRatio, VideoType } from "./video.model";
import { DomSanitizer } from "@angular/platform-browser";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import * as i0 from "@angular/core";
export declare class VideoComponent implements AfterViewInit, OnInit {
    private browserService;
    sanitizer: DomSanitizer;
    topBackground?: VideoBackgroundColors;
    bottomBackground?: VideoBackgroundColors;
    videoType: VideoType;
    title: string;
    italics?: boolean;
    src?: string;
    youtubeId?: string;
    videoDescription: string;
    muted?: boolean;
    controls?: boolean;
    autoplay?: boolean;
    loop?: VideoLoopConfig;
    aspectRatio?: VideoAspectRatio;
    brandFolderIframeId: string;
    video?: ElementRef<HTMLVideoElement & {
        removeAllListeners: (e: string) => void;
    }>;
    player?: YT.PlayerEvent;
    didClickPlay: boolean;
    apiLoaded: boolean;
    ytTimeout?: number;
    constructor(browserService: BrowserService, sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getPopupClasses(): string;
    play(): void;
    ytSeekTo(e: YT.PlayerEvent, time: number): void;
    onReady(e: YT.PlayerEvent): void;
    onStateChange(e: YT.OnStateChangeEvent): void;
    getYoutubeId(): string;
    getAspectRatioClass(): string;
    sanitize(id: string): import("@angular/platform-browser").SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<VideoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VideoComponent, "aus-video", never, { "topBackground": "topBackground"; "bottomBackground": "bottomBackground"; "videoType": "videoType"; "title": "title"; "italics": "italics"; "src": "src"; "youtubeId": "youtubeId"; "videoDescription": "videoDescription"; "muted": "muted"; "controls": "controls"; "autoplay": "autoplay"; "loop": "loop"; "aspectRatio": "aspectRatio"; "brandFolderIframeId": "brandFolderIframeId"; }, {}, never, never, false>;
}
