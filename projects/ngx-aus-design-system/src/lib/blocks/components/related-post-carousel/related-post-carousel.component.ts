import { Component, Input, OnInit } from "@angular/core";
import { OneTimeService } from "../../../shared/services/one-time/one-time.service";
import { PostService } from "../../../shared/services/post/post.service";
import { ArticleCardVariant } from "../article-card/article-card.model";
import { InteriorPageHeroCarouselSlide } from "../interior-page-hero-carousel/interior-page-hero-carousel.model";
import { ButtonRelatedPostCarousel } from "./related-post-carousel.model";

@Component({
  selector: "aus-related-post-carousel",
  templateUrl: "./related-post-carousel.component.html",
})
export class RelatedPostCarouselComponent implements OnInit {
  @Input() title: string = "";
  @Input() button: ButtonRelatedPostCarousel = {
    variant: "red",
    text: "Read More",
  };
  @Input() articlesIds: number[] = [];
  @Input() variant: ArticleCardVariant = "img-left";
  @Input() slides: InteriorPageHeroCarouselSlide[] = [];
  oneTimeKey: string = "RELATED_POST_CAROUSEL_K7SEUF";

  constructor(
    private postService: PostService,
    private oneTime: OneTimeService
  ) {}

  ngOnInit(): void {
    if (this.articlesIds.length) {
      if (this.oneTime.oneTime(this.oneTimeKey)) {
        this.postService
          .getPostByIds(this.articlesIds)
          .subscribe((res: any) => {
            if (!res.data.articles) return;

            let nodes = res.data.articles.nodes.concat(res.data.posts.nodes);
            for (let node of nodes) {
              this.slides.push({
                variant:
                  this.variant === "img-left" ? "left-image" : "right-image",
                type: "light",
                date: node.date,
                imgUrl:
                  node.excerptArticlesAndPosts?.brandfolderEmbed?.url ?? "",
                header: node.title,
                btn: {
                  href: node.feUrl,
                  text: this.button.text,
                  target: "_self",
                  variant: this.button.variant,
                },
              });
            }

            this.oneTime.set(this.oneTimeKey, this.slides);
          });
      } else {
        this.slides = this.oneTime.get(this.oneTimeKey, []);
      }
    }
  }
}
