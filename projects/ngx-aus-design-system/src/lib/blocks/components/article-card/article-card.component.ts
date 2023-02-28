import { Component, Input } from "@angular/core";

import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { ImageRoundedCorners } from "../../../shared/components/image/image.model";
import { TypographyComponentVariants } from "../../../shared/components/typography/typography.component.model";
import { Image } from "../../../shared/components/image/image.model";
import { ArticleCardVariant } from "./article-card.model";

@Component({
  selector: "aus-article-card",
  templateUrl: "./article-card.component.html",
  styleUrls: ["./article-card.component.scss"],
})
export class ArticleCardComponent {
  @Input() variant: ArticleCardVariant = "img-left";
  @Input() publishDate: string = "";
  @Input() endDate?: string = "";
  @Input() url: string = "";
  @Input() img: Image = {
    imageUrl: "",
    alt: "",
  };
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() tagTitle?: TypographyComponentVariants = "h4";
  @Input() loading: boolean = false;
  @Input() btn?: ButtonConfig;
  imageRoundedCorners: ImageRoundedCorners = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };

  constructor() {}
}
