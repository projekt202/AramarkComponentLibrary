export type AccordionComponentComponentVariant = 'centered' | 'fullwidth';

export type AccordionComponentComponentType = 'black' | 'gray' | 'white';

export type AccordionComponentIntro = {
  imageUrl: string;
  title: string;
  text: string;
  position: 'left' | 'right' | 'top';
};

export type AccordionComponentItem = {
  title: string;
  content: string;
};
