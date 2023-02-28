import { OnInit } from "@angular/core";
import { BranfolderService } from "../../../shared/services/branfolder/branfolder.service";
import { OneTimeService } from "../../../shared/services/one-time/one-time.service";
import { PostService } from "../../../shared/services/post/post.service";
import { ArticleCard } from "../article-card/article-card.model";
import { BannerBarComponentBackgrounds } from "../banner-bar/banner-bar.model";
import * as i0 from "@angular/core";
export declare class RelatedPostComponent implements OnInit {
    private postService;
    private oneTime;
    private bfs;
    title: string;
    articlesIds: number[];
    background: BannerBarComponentBackgrounds;
    articles: ArticleCard[];
    oneTimeKey: string;
    constructor(postService: PostService, oneTime: OneTimeService, bfs: BranfolderService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelatedPostComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelatedPostComponent, "aus-related-post", never, { "title": "title"; "articlesIds": "articlesIds"; "background": "background"; "articles": "articles"; }, {}, never, never, false>;
}
