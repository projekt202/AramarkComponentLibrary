import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/services/post/post.service";
import * as i2 from "../../../shared/services/one-time/one-time.service";
import * as i3 from "@angular/common";
import * as i4 from "../interior-page-hero-carousel/interior-page-hero-carousel.component";
export class RelatedPostCarouselComponent {
    constructor(postService, oneTime) {
        this.postService = postService;
        this.oneTime = oneTime;
        this.title = "";
        this.button = {
            variant: "red",
            text: "Read More",
        };
        this.articlesIds = [];
        this.variant = "img-left";
        this.slides = [];
        this.oneTimeKey = "RELATED_POST_CAROUSEL_K7SEUF";
    }
    ngOnInit() {
        if (this.articlesIds.length) {
            if (this.oneTime.oneTime(this.oneTimeKey)) {
                this.postService
                    .getPostByIds(this.articlesIds)
                    .subscribe((res) => {
                    if (!res.data.articles)
                        return;
                    let nodes = res.data.articles.nodes.concat(res.data.posts.nodes);
                    for (let node of nodes) {
                        this.slides.push({
                            variant: this.variant === "img-left" ? "left-image" : "right-image",
                            type: "light",
                            date: node.date,
                            imgUrl: node.excerptArticlesAndPosts?.brandfolderEmbed?.url ?? "",
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
            }
            else {
                this.slides = this.oneTime.get(this.oneTimeKey, []);
            }
        }
    }
}
RelatedPostCarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostCarouselComponent, deps: [{ token: i1.PostService }, { token: i2.OneTimeService }], target: i0.ɵɵFactoryTarget.Component });
RelatedPostCarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: RelatedPostCarouselComponent, selector: "aus-related-post-carousel", inputs: { title: "title", button: "button", articlesIds: "articlesIds", variant: "variant", slides: "slides" }, ngImport: i0, template: "<aus-interior-page-hero-carousel\n  aria-label=\"Featured articles\"\n  *ngIf=\"slides\"\n  [title]=\"title\"\n  [slides]=\"slides\"\n></aus-interior-page-hero-carousel>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.InteriorPageHeroCarouselComponent, selector: "aus-interior-page-hero-carousel", inputs: ["title", "variant", "slides"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: RelatedPostCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: "aus-related-post-carousel", template: "<aus-interior-page-hero-carousel\n  aria-label=\"Featured articles\"\n  *ngIf=\"slides\"\n  [title]=\"title\"\n  [slides]=\"slides\"\n></aus-interior-page-hero-carousel>\n" }]
        }], ctorParameters: function () { return [{ type: i1.PostService }, { type: i2.OneTimeService }]; }, propDecorators: { title: [{
                type: Input
            }], button: [{
                type: Input
            }], articlesIds: [{
                type: Input
            }], variant: [{
                type: Input
            }], slides: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1wb3N0LWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXMtZGVzaWduLXN5c3RlbS9zcmMvbGliL2Jsb2Nrcy9jb21wb25lbnRzL3JlbGF0ZWQtcG9zdC1jYXJvdXNlbC9yZWxhdGVkLXBvc3QtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvYmxvY2tzL2NvbXBvbmVudHMvcmVsYXRlZC1wb3N0LWNhcm91c2VsL3JlbGF0ZWQtcG9zdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBV3pELE1BQU0sT0FBTyw0QkFBNEI7SUFXdkMsWUFDVSxXQUF3QixFQUN4QixPQUF1QjtRQUR2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVp4QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBOEI7WUFDM0MsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsV0FBVztTQUNsQixDQUFDO1FBQ08sZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUF1QixVQUFVLENBQUM7UUFDekMsV0FBTSxHQUFvQyxFQUFFLENBQUM7UUFDdEQsZUFBVSxHQUFXLDhCQUE4QixDQUFDO0lBS2pELENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFdBQVc7cUJBQ2IsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7cUJBQzlCLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUFFLE9BQU87b0JBRS9CLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pFLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO3dCQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDZixPQUFPLEVBQ0wsSUFBSSxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYTs0QkFDNUQsSUFBSSxFQUFFLE9BQU87NEJBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzRCQUNmLE1BQU0sRUFDSixJQUFJLENBQUMsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLEVBQUU7NEJBQzNELE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSzs0QkFDbEIsR0FBRyxFQUFFO2dDQUNILElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQ0FDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQ0FDdEIsTUFBTSxFQUFFLE9BQU87Z0NBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs2QkFDN0I7eUJBQ0YsQ0FBQyxDQUFDO3FCQUNKO29CQUVELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNyRDtTQUNGO0lBQ0gsQ0FBQzs7MEhBakRVLDRCQUE0Qjs4R0FBNUIsNEJBQTRCLGlMQ1h6Qyw2S0FNQTs0RkRLYSw0QkFBNEI7a0JBSnhDLFNBQVM7K0JBQ0UsMkJBQTJCOytIQUk1QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUlHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPbmVUaW1lU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvb25lLXRpbWUvb25lLXRpbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bvc3QvcG9zdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcnRpY2xlQ2FyZFZhcmlhbnQgfSBmcm9tIFwiLi4vYXJ0aWNsZS1jYXJkL2FydGljbGUtY2FyZC5tb2RlbFwiO1xuaW1wb3J0IHsgSW50ZXJpb3JQYWdlSGVyb0Nhcm91c2VsU2xpZGUgfSBmcm9tIFwiLi4vaW50ZXJpb3ItcGFnZS1oZXJvLWNhcm91c2VsL2ludGVyaW9yLXBhZ2UtaGVyby1jYXJvdXNlbC5tb2RlbFwiO1xuaW1wb3J0IHsgQnV0dG9uUmVsYXRlZFBvc3RDYXJvdXNlbCB9IGZyb20gXCIuL3JlbGF0ZWQtcG9zdC1jYXJvdXNlbC5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXVzLXJlbGF0ZWQtcG9zdC1jYXJvdXNlbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3JlbGF0ZWQtcG9zdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZWxhdGVkUG9zdENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIGJ1dHRvbjogQnV0dG9uUmVsYXRlZFBvc3RDYXJvdXNlbCA9IHtcbiAgICB2YXJpYW50OiBcInJlZFwiLFxuICAgIHRleHQ6IFwiUmVhZCBNb3JlXCIsXG4gIH07XG4gIEBJbnB1dCgpIGFydGljbGVzSWRzOiBudW1iZXJbXSA9IFtdO1xuICBASW5wdXQoKSB2YXJpYW50OiBBcnRpY2xlQ2FyZFZhcmlhbnQgPSBcImltZy1sZWZ0XCI7XG4gIEBJbnB1dCgpIHNsaWRlczogSW50ZXJpb3JQYWdlSGVyb0Nhcm91c2VsU2xpZGVbXSA9IFtdO1xuICBvbmVUaW1lS2V5OiBzdHJpbmcgPSBcIlJFTEFURURfUE9TVF9DQVJPVVNFTF9LN1NFVUZcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcbiAgICBwcml2YXRlIG9uZVRpbWU6IE9uZVRpbWVTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hcnRpY2xlc0lkcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm9uZVRpbWUub25lVGltZSh0aGlzLm9uZVRpbWVLZXkpKSB7XG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2VcbiAgICAgICAgICAuZ2V0UG9zdEJ5SWRzKHRoaXMuYXJ0aWNsZXNJZHMpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLmRhdGEuYXJ0aWNsZXMpIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IG5vZGVzID0gcmVzLmRhdGEuYXJ0aWNsZXMubm9kZXMuY29uY2F0KHJlcy5kYXRhLnBvc3RzLm5vZGVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5zbGlkZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFyaWFudDpcbiAgICAgICAgICAgICAgICAgIHRoaXMudmFyaWFudCA9PT0gXCJpbWctbGVmdFwiID8gXCJsZWZ0LWltYWdlXCIgOiBcInJpZ2h0LWltYWdlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgIGRhdGU6IG5vZGUuZGF0ZSxcbiAgICAgICAgICAgICAgICBpbWdVcmw6XG4gICAgICAgICAgICAgICAgICBub2RlLmV4Y2VycHRBcnRpY2xlc0FuZFBvc3RzPy5icmFuZGZvbGRlckVtYmVkPy51cmwgPz8gXCJcIixcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG5vZGUudGl0bGUsXG4gICAgICAgICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBub2RlLmZlVXJsLFxuICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5idXR0b24udGV4dCxcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfc2VsZlwiLFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogdGhpcy5idXR0b24udmFyaWFudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vbmVUaW1lLnNldCh0aGlzLm9uZVRpbWVLZXksIHRoaXMuc2xpZGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2xpZGVzID0gdGhpcy5vbmVUaW1lLmdldCh0aGlzLm9uZVRpbWVLZXksIFtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxhdXMtaW50ZXJpb3ItcGFnZS1oZXJvLWNhcm91c2VsXG4gIGFyaWEtbGFiZWw9XCJGZWF0dXJlZCBhcnRpY2xlc1wiXG4gICpuZ0lmPVwic2xpZGVzXCJcbiAgW3RpdGxlXT1cInRpdGxlXCJcbiAgW3NsaWRlc109XCJzbGlkZXNcIlxuPjwvYXVzLWludGVyaW9yLXBhZ2UtaGVyby1jYXJvdXNlbD5cbiJdfQ==