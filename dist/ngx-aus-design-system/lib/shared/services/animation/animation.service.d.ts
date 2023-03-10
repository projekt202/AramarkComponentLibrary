import { TargetElement } from 'split-type';
import { PlatformService } from '../platform/platform.service';
import { BrowserService } from '../browser/browser.service';
import * as i0 from "@angular/core";
export declare class AnimationService {
    private ps;
    private bs;
    constructor(ps: PlatformService, bs: BrowserService);
    animTextLines(target: TargetElement, parent: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnimationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnimationService>;
}
