import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {
  TippyModule,
  tooltipVariation,
  popperVariation,
} from '@ngneat/helipopper';
import { SanitizePipe } from 'src/app/shared/pipes/sanitize/sanitize.pipe';

import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoComponent, SanitizePipe],
      imports: [
        YouTubePlayerModule,
        TippyModule.forRoot({
          defaultVariation: 'tooltip',
          variations: {
            tooltip: tooltipVariation,
            popper: popperVariation,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a muted, autoplayed video with black popup', () => {
    component.topBackground = 'black';
    component.bottomBackground = 'white';
    component.autoplay = true;
    component.muted = true;
    component.src = 'test';
    fixture.detectChanges();
    const video = fixture.debugElement.nativeElement.querySelector('video');
    expect(video.muted).toBeTrue();
    expect(video.autoplay).toBeTrue();
  });

  it('triggers a custom native video loop', () => {
    const element = document.createElement('video');
    component.src = 'test';
    component.autoplay = true;
    component.video = {
      nativeElement: {
        ...element,
        removeAllListeners: (e: string) => e,
      },
    };
    component.loop = {
      start: 5,
      end: 9,
    };
    spyOn(element, 'play');
    fixture.detectChanges();
    component.ngAfterViewInit();
    element.currentTime = 9;
    element.dispatchEvent(new Event('timeupdate'));
  });

  it('inserts youtube api script dynamically', () => {
    let scripts = document.querySelectorAll('script');
    component.youtubeId = '123';
    component.apiLoaded = false;
    let srcs: string[] = [];
    scripts.forEach((script) => {
      srcs.push(script.src);
    });
    expect(srcs).not.toContain('https://www.youtube.com/iframe_api');
    srcs = [];
    component.ngOnInit();
    scripts = document.querySelectorAll('script');
    scripts.forEach((script) => {
      srcs.push(script.src);
    });
    expect(srcs).toContain('https://www.youtube.com/iframe_api');
  });

  it('plays native video on button click', () => {
    expect(component.didClickPlay).toBeFalse();
    component.src = 'test';
    component.controls = true;
    component.video = {
      nativeElement: {
        ...document.createElement('video'),
        removeAllListeners: (e) => e,
        play: jasmine.createSpy(),
      },
    };
    component.play();
    expect(component.didClickPlay).toBeTrue();
    expect(component.video.nativeElement.play).toHaveBeenCalled();
  });

  it('plays YouTube embedded video on button click', () => {
    spyOn(component, 'ytSeekTo');
    component.src = undefined;
    component.youtubeId = 'test';
    component.player = {
      // @ts-ignore
      target: {
        getIframe: jasmine.createSpy().and.returnValue({
          src: 'test',
        }),
        seekTo: jasmine.createSpy(),
        playVideo: jasmine.createSpy(),
      },
    };
    component.play();
    expect(component.ytSeekTo).toHaveBeenCalled();
  });

  it('plays a YouTube embedded video at a specific time', () => {
    const e = {
      target: {
        seekTo: jasmine.createSpy(),
        playVideo: jasmine.createSpy(),
      },
    };
    // @ts-ignore
    component.ytSeekTo(e, 5);
    expect(e.target.seekTo).toHaveBeenCalledWith(5, true);
    expect(e.target.playVideo).toHaveBeenCalled();
    // @ts-ignore
    component.ytSeekTo(undefined, 10);
    e.target.seekTo.calls.reset();
    e.target.playVideo.calls.reset();
    expect(e.target.seekTo).not.toHaveBeenCalled();
    expect(e.target.playVideo).not.toHaveBeenCalled();
  });

  it('initializes configuration for YouTube embedded video when iframe loads', () => {
    spyOn(component, 'ytSeekTo');
    const e = {
      target: {
        mute: jasmine.createSpy(),
        unMute: jasmine.createSpy(),
      },
    };
    expect(component.player).toBeUndefined();
    component.loop = {
      start: 1,
      end: 2,
    };
    component.didClickPlay = false;
    // @ts-ignore
    component.onReady(e);
    // @ts-ignore
    expect(component.ytSeekTo).toHaveBeenCalledWith(e, 1);
    expect(e.target.unMute).toHaveBeenCalled();
    component.muted = true;
    // @ts-ignore
    component.onReady(e);
    expect(e.target.mute).toHaveBeenCalled();
  });

  it('updates YouTube embedded video time on state change', fakeAsync(() => {
    spyOn(window, 'clearTimeout');
    spyOn(component, 'ytSeekTo');
    component.ytTimeout = 1;
    // @ts-ignore
    component.onStateChange({
      data: 2,
    });
    expect(window.clearTimeout).toHaveBeenCalledWith(1);
    component.loop = {
      start: 5,
      end: 10,
    };
    component.didClickPlay = false;
    component.ytTimeout = 2;
    // @ts-ignore
    component.onStateChange({
      data: 1,
    });
    tick(10000);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // @ts-ignore
      expect(component.ytSeekTo).toHaveBeenCalledWith({ data: 1 }, 5);
      expect(window.clearTimeout).toHaveBeenCalledWith(2);
    });
  }));
});
