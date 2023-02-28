import { Component, Input, OnInit } from "@angular/core";
import { BranfolderService } from "../../../shared/services/branfolder/branfolder.service";
import { OneTimeService } from "../../../shared/services/one-time/one-time.service";
import { PostService } from "../../../shared/services/post/post.service";
import { ArticleCard } from "../article-card/article-card.model";
import { BannerBarComponentBackgrounds } from "../banner-bar/banner-bar.model";

@Component({
  selector: "aus-related-post",
  templateUrl: "./related-post.component.html",
  styleUrls: ["./related-post.component.scss"],
})
export class RelatedPostComponent implements OnInit {
  @Input() title: string = "";
  @Input() articlesIds: number[] = [];
  @Input() background: BannerBarComponentBackgrounds = "gray";
  @Input() articles: ArticleCard[] = [];
  oneTimeKey: string = "RELATED_POST_DUR8SU";

  constructor(
    private postService: PostService,
    private oneTime: OneTimeService,
    private bfs: BranfolderService
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
              let image = this.bfs.parse(
                node.excerptArticlesAndPosts?.brandfolderEmbed
              );
              this.articles.push({
                variant: "img-top",
                publishDate: node.date,
                url: node.feUrl,
                img: image,
                title: node.title,
                text:
                  node.excerptArticlesAndPosts?.writeAnExcerptOptional ?? "",
              });
            }

            this.oneTime.set(this.oneTimeKey, this.articles);
          });
      } else {
        this.articles = this.oneTime.get(this.oneTimeKey, []);
      }
    }
  }
}
