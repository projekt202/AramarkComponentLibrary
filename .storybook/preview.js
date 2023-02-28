import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

const customViewports = {
  desktopComponents: {
    name: 'DESKTOP Components',
    styles: {
      width: '1399px',
      height: '963px',
    },
  },
  tabletComponentsB: {
    name: 'TABLET Components B',
    styles: {
      width: '800px',
      height: '801px',
    },
  },
  tabletComponents: {
    name: 'TABLET Components',
    styles: {
      width: '752px',
      height: '801px',
    },
  },
  mobileComponents: {
    name: 'MOBILE Components',
    styles: {
      width: '352px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^onSTBK[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
      ...MINIMAL_VIEWPORTS
    },
    defaultViewport: 'someDefault',
  },
  docs: { inlineStories: true },
}

const allFields = docJson.components
  ?.map(c => ([...(c.propertiesClass || []), ...(c.inputsClass || [])]))
  .flat();

allFields.forEach(p => {
  if (p.type === 'number') {
    p.defaultValue = +(p.defaultValue);
  } else {
    delete p.defaultValue;
  }
});

setCompodocJson(docJson);
