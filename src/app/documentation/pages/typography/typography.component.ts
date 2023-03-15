import { TypographyPresets } from "./../../../../../projects/ngx-aus-design-system/src/lib/shared/components/typography/typography.component.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.scss"],
})
export class TypographyComponent {
  @Input() story: "presets" | "headings" = "presets";

  itemsPresets = [
    {
      name: "Core Text Presets",
      presets: [
        {
          name: "text-preset-1",
          size: "52 / 3.25",
          lineHeight: "64 / 4",
          weight: "Book",
          letterSpacing: "-0.16",
          token: "$text-preset-1",
        },
        {
          name: "text-preset-2",
          size: "40 / 2.5",
          lineHeight: "52 / 3.25",
          weight: "Book",
          letterSpacing: "-0.16",
          token: "$text-preset-2",
        },
        {
          name: "text-preset-3",
          size: "32 / 2",
          lineHeight: "48 / 3",
          weight: "Book",
          letterSpacing: "-0.16",
          token: "$text-preset-3",
        },
        {
          name: "text-preset-4",
          size: "28 / 1.75",
          lineHeight: "40 / 2.5",
          weight: "Book",
          letterSpacing: "0",
          token: "$text-preset-4",
        },
        {
          name: "text-preset-5",
          size: "20 / 1.25",
          lineHeight: "32 / 2",
          weight: "Book",
          letterSpacing: "0",
          token: "$text-preset-5",
        },
        {
          name: "text-preset-6",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Book",
          letterSpacing: "0.8",
          token: "$text-preset-6",
        },
        {
          name: "text-preset-7",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Book",
          letterSpacing: "0.16",
          token: "$text-preset-7",
        },
        {
          name: "text-preset-8",
          size: "14 / 0.875",
          lineHeight: "20 / 1.25",
          weight: "Book",
          letterSpacing: "0.16",
          token: "$text-preset-8",
        },
        {
          name: "text-preset-9",
          size: "12 / 0.75",
          lineHeight: "20 / 1.25",
          weight: "Book",
          letterSpacing: "0.16",
          token: "$text-preset-9",
        },
      ],
    },
    {
      name: "Medium Modifier",
      presets: [
        {
          name: "text-preset-1--medium",
          size: "52 / 3.25",
          lineHeight: "64 / 4",
          weight: "Medium",
          letterSpacing: "-0.16",
          token: "$text-preset-1--medium",
        },
        {
          name: "text-preset-2--medium",
          size: "40 / 2.5",
          lineHeight: "52 / 3.25",
          weight: "Medium",
          letterSpacing: "-0.16",
          token: "$text-preset-2--medium",
        },
        {
          name: "text-preset-3--medium",
          size: "32 / 2",
          lineHeight: "48 / 3",
          weight: "Medium",
          letterSpacing: "-0.16",
          token: "$text-preset-3--medium",
        },
        {
          name: "text-preset-4--medium",
          size: "28 / 1.75",
          lineHeight: "40 / 2.5",
          weight: "Medium",
          letterSpacing: "0",
          token: "$text-preset-4--medium",
        },
        {
          name: "text-preset-5--medium",
          size: "20 / 1.25",
          lineHeight: "32 / 2",
          weight: "Medium",
          letterSpacing: "0",
          token: "$text-preset-5--medium",
        },
        {
          name: "text-preset-6--medium",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Medium",
          letterSpacing: "0.8",
          token: "$text-preset-6--medium",
        },
        {
          name: "text-preset-7--medium",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Medium",
          letterSpacing: "0.16",
          token: "$text-preset-7--medium",
        },
        {
          name: "text-preset-8--medium",
          size: "14 / 0.875",
          lineHeight: "20 / 1.25",
          weight: "Medium",
          letterSpacing: "0.16",
          token: "$text-preset-8--medium",
        },
        {
          name: "text-preset-9--medium",
          size: "12 / 0.75",
          lineHeight: "20 / 1.25",
          weight: "Medium",
          letterSpacing: "0.16",
          token: "$text-preset-9--medium",
        },
      ],
    },
    {
      name: "Bold Modifier",
      presets: [
        {
          name: "text-preset-1--bold",
          size: "52 / 3.25",
          lineHeight: "64 / 4",
          weight: "Bold",
          letterSpacing: "-0.16",
          token: "$text-preset-1--bold",
        },
        {
          name: "text-preset-2--bold",
          size: "40 / 2.5",
          lineHeight: "52 / 3.25",
          weight: "Bold",
          letterSpacing: "-0.16",
          token: "$text-preset-2--bold",
        },
        {
          name: "text-preset-3--bold",
          size: "32 / 2",
          lineHeight: "48 / 3",
          weight: "Bold",
          letterSpacing: "-0.16",
          token: "$text-preset-3--bold",
        },
        {
          name: "text-preset-4--bold",
          size: "28 / 1.75",
          lineHeight: "40 / 2.5",
          weight: "Bold",
          letterSpacing: "0",
          token: "$text-preset-4--bold",
        },
        {
          name: "text-preset-5--bold",
          size: "20 / 1.25",
          lineHeight: "32 / 2",
          weight: "Bold",
          letterSpacing: "0",
          token: "$text-preset-5--bold",
        },
        {
          name: "text-preset-6--bold",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Bold",
          letterSpacing: "0.8",
          token: "$text-preset-6--bold",
        },
        {
          name: "text-preset-7--bold",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Bold",
          letterSpacing: "0.16",
          token: "$text-preset-7--bold",
        },
        {
          name: "text-preset-8--bold",
          size: "14 / 0.875",
          lineHeight: "20 / 1.25",
          weight: "Bold",
          letterSpacing: "0.16",
          token: "$text-preset-8--bold",
        },
        {
          name: "text-preset-9--bold",
          size: "12 / 0.75",
          lineHeight: "20 / 1.25",
          weight: "Bold",
          letterSpacing: "0.16",
          token: "$text-preset-9--bold",
        },
      ],
    },
    {
      name: "Underline Modifier",
      presets: [
        {
          name: "text-preset-7--underline",
          size: "16 / 1",
          lineHeight: "24 / 1.5",
          weight: "Medium",
          letterSpacing: "0.16",
          token: "$text-preset-7--underline",
        },
        {
          name: "text-preset-8--underline",
          size: "14 / 0.875",
          lineHeight: "20 / 1.25",
          weight: "Medium",
          letterSpacing: "0.16",
          token: "$text-preset-8--underline",
        },
        {
          name: "text-preset-9--underline",
          size: "12 / 0.75",
          lineHeight: "20 / 1.25",
          weight: "Medium",
          letterSpacing: "0.16",
          token: "$text-preset-9--underline",
        },
      ],
    },
  ];

  itemsHeadings = [
    {
      name: "Desktop Headings",
      presets: [
        {
          name: "H1 Heading",
          token: "$text-preset-1--bold",
          className: "text-preset-1--bold",
        },
        {
          name: "H2 Heading",
          token: "$text-preset-2--medium",
          className: "text-preset-2--medium",
        },
        {
          name: "H3 Heading",
          token: "$text-preset-3--medium",
          className: "text-preset-3--medium",
        },
        {
          name: "H4 Heading",
          token: "$text-preset-4--medium",
          className: "text-preset-4--medium",
        },
        {
          name: "H5 Heading",
          token: "$text-preset-5--bold",
          className: "text-preset-5--bold",
        },
        {
          name: "H6 Heading",
          token: "$text-preset-6--bold",
          className: "text-preset-6--bold",
        },
      ],
    },
    {
      name: "Tablet Headings",
      presets: [
        {
          name: "H1 Heading",
          token: "$text-preset-2--bold",
          className: "text-preset-2--bold",
        },
        {
          name: "H2 Heading",
          token: "$text-preset-3--medium",
          className: "text-preset-3--medium",
        },
        {
          name: "H3 Heading",
          token: "$text-preset-4--medium",
          className: "text-preset-4--medium",
        },
        {
          name: "H4 Heading",
          token: "$text-preset-5--medium",
          className: "text-preset-5--medium",
        },
        {
          name: "H5 Heading",
          token: "$text-preset-7--bold",
          className: "text-preset-7--bold",
        },
        {
          name: "H6 Heading",
          token: "$text-preset-6--bold",
          className: "text-preset-6--bold",
        },
      ],
    },
    {
      name: "Mobile Headings",
      presets: [
        {
          name: "H1 Heading",
          token: "$text-preset-3--bold",
          className: "text-preset-3--bold",
        },
        {
          name: "H2 Heading",
          token: "$text-preset-3--medium",
          className: "text-preset-3--medium",
        },
        {
          name: "H3 Heading",
          token: "$text-preset-4--medium",
          className: "text-preset-4--medium",
        },
        {
          name: "H4 Heading",
          token: "$text-preset-5--medium",
          className: "text-preset-5--medium",
        },
        {
          name: "H5 Heading",
          token: "$text-preset-7--bold",
          className: "text-preset-7--bold",
        },
        {
          name: "H6 Heading",
          token: "$text-preset-6--bold",
          className: "text-preset-6--bold",
        },
      ],
    },
  ];

  getCastedName(name: string) {
    return name as TypographyPresets;
  }
}