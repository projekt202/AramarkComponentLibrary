import { QuoteComponentAuthor } from "../quote/quote.component.model";

export type QuoteSliderComponentData = {
  author: QuoteComponentAuthor,
  quoteText: string
};

export type QuoteSliderComponentType = 'dark' | 'light';
