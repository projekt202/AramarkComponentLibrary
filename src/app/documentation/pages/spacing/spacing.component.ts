import { Component, Input } from "@angular/core";

@Component({
  selector: "app-spacing",
  templateUrl: "./spacing.component.html",
  styleUrls: ["./spacing.component.scss"],
})
export class SpacingComponent {
  @Input() story: "blocks" | "grid" = "blocks";

  itemsBlocks = [
    {
      name: "Spacing Blocks",
      blocks: [
        {
          px: "2",
          rem: "0.125",
        },
        {
          px: "4",
          rem: "0.25",
        },
        {
          px: "8",
          rem: "0.5",
        },
        {
          px: "12",
          rem: "0.75",
        },
        {
          px: "16",
          rem: "1",
        },
        {
          px: "24",
          rem: "1.5",
        },
        {
          px: "32",
          rem: "2",
        },
        {
          px: "40",
          rem: "2.5",
        },
        {
          px: "48",
          rem: "3",
        },
        {
          px: "64",
          rem: "4",
        },
        {
          px: "80",
          rem: "5",
        },
        {
          px: "96",
          rem: "6",
        },
        {
          px: "160",
          rem: "10",
        },
      ],
    },
  ];

  itemsGrid = [
    {
      name: "X-Small",
      threshold: "0px - 424px (mobile)",
      specs: {
        cols: 4,
        gutters: 16,
        margins: 16,
      },
      notes:
        "When mocking up designs for this breakpoint, use the “X-Small (320px)” component",
    },
    {
      name: "Small",
      threshold: "425px - 767px (mobile)",
      specs: {
        cols: 4,
        gutters: 16,
        margins: 16,
      },
      notes:
        "When mocking up designs for this breakpoint, use the “Small (425px)” component",
    },
    {
      name: "Medium",
      threshold: "768px - 1023px (tablet)",
      specs: {
        cols: 8,
        gutters: 16,
        margins: 16,
      },
      notes:
        "When mocking up designs for this breakpoint, use the “Medium (768px)” component",
    },
    {
      name: "Large",
      threshold: "1024px - 1365px (tablet, desktop)",
      specs: {
        cols: 12,
        gutters: 20,
        margins: 20,
      },
      notes:
        "When mocking up designs for this breakpoint, use the “Large (1024px)” component",
    },
    {
      name: "X-Large",
      threshold: "1366px+ (desktop)",
      specs: {
        cols: 12,
        gutters: 20,
        margins: 20,
      },
      notes:
        "When mocking up designs for this breakpoint, use the “Large (1024px)” component",
    },
  ];
}
