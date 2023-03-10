import { OnInit } from "@angular/core";
import { OneTimeService } from "../../../shared/services/one-time/one-time.service";
import { PostService } from "../../../shared/services/post/post.service";
import { ArticleCardVariant } from "../article-card/article-card.model";
import { InteriorPageHeroCarouselSlide } from "../interior-page-hero-carousel/interior-page-hero-carousel.model";
import { ButtonRelatedPostCarousel } from "./related-post-carousel.model";
import * as i0 from "@angular/core";
export declare class RelatedPostCarouselComponent implements OnInit {
    private postService;
    private oneTime;
    title: string;
    button: ButtonRelatedPostCarousel;
    articlesIds: number[];
    variant: ArticleCardVariant;
    slides: InteriorPageHeroCarouselSlide[];
    oneTimeKey: string;
    constructor(postService: PostService, oneTime: OneTimeService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelatedPostCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelatedPostCarouselComponent, "aus-related-post-carousel", never, { "title": "title"; "button": "button"; "articlesIds": "articlesIds"; "variant": "variant"; "slides": "slides"; }, {}, never, never, false>;
}
