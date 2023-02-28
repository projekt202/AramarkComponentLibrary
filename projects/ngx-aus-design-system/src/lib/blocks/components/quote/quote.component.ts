import { Component, Input, OnInit } from "@angular/core";
import {
  QuoteComponentAuthor,
  QuoteComponentType,
} from "./quote.component.model";

@Component({
  selector: "aus-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.scss"],
})
export class QuoteComponent implements OnInit {
  @Input() type: QuoteComponentType = "light";
  @Input() author: QuoteComponentAuthor = {
    image: "",
    name: "",
    title: "",
    location: "",
  };
  @Input() quoteText: string = "";

  constructor() {}

  ngOnInit(): void {}

  getClasses() {
    const classes = ["quote"];
    if (this.type === "dark") {
      classes.push("type--dark");
    } else {
      classes.push("type--light");
    }
    return classes.join(" ");
  }
}
