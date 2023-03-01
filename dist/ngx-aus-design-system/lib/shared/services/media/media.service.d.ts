import { BrowserService } from '../browser/browser.service';
import { ResponsiveImages } from './media.model';
import * as i0 from "@angular/core";
export declare class MediaService {
    private bs;
    window?: Window | null;
    constructor(bs: BrowserService);
    getResponsiveImage(images: ResponsiveImages): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}
