import { Component, Input } from "@angular/core";

@Component({
  selector: "aus-reviews-cards",
  templateUrl: "./reviews-cards.component.html",
  styleUrls: ["./reviews-cards.component.scss"],
})
export class ReviewsCardsComponent {
  @Input() title: string = "";
  @Input() reviews: {
    text: string;
    title: string;
    href: string;
    date: string;
    rating: number;
  }[] = [];

  constructor() {}
}
