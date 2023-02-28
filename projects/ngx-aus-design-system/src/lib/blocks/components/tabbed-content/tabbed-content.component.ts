import { AfterViewInit, Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductCardInputs } from "../../../shared/components/product-card/product-card.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { FiltersService } from "../../../shared/services/filters/filters.service";

import {
  TabbedContentLayout,
  TabbedContentMain,
  TabbedContentVariant,
} from "./tabbed-content.model";

@Component({
  selector: "aus-tabbed-content",
  templateUrl: "./tabbed-content.component.html",
  styleUrls: ["./tabbed-content.component.scss"],
})
export class TabbedContentComponent implements AfterViewInit {
  @Input() variant: TabbedContentVariant = "white";
  @Input() title: string = "";
  @Input() categories: string[] = [];
  @Input() layout: TabbedContentLayout = "fullwidth";
  @Input() content: TabbedContentMain = [];

  activeIdx: number = 0;
  productForModal?: ProductCardInputs;
  noInitialPreview?: boolean;

  constructor(
    private fs: FiltersService,
    private bs: BrowserService,
    private route: ActivatedRoute
  ) {
    if (!this.bs.getWindow()?.location.search.includes("pid")) {
      this.noInitialPreview = true;
    }
  }

  ngAfterViewInit(): void {
    this.content.forEach((tab: any) => {
      tab.forEach((col: any) => {
        if (col.products?.length) {
          this.fs
            .getData({
              products: col.products.map((p: any) => p.id),
            })
            .subscribe((res: any) => {
              const { products } = res.data;
              products.edges.forEach((p: any) => {
                let prod = col.products.find(
                  (_p: any) => _p.id === p.node.productId.toString()
                );
                if (prod) {
                  this.fs.parseProduct(prod, p.node);
                }
              });
              this.route.queryParams.subscribe((params: any) => {
                if (!params?.pid || this.noInitialPreview) return;
                const found = col.products.find(
                  (p: any) => p.id === params.pid
                );
                if (found) {
                  this.productForModal = found;
                }
              });
            });
        }
      });
    });
  }

  onSelectionHandler(idx: number) {
    this.activeIdx = idx;
  }
}
