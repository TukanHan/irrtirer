import { Preview } from '@storybook/angular';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { withThemeByClassName } from '@storybook/addon-themes';
import docJson from "../documentation.json";

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        gray0: { name: 'gray-0', value: '#ffffff' },
        gray10: { name: 'gray-10', value: '#e6e6e6' },
        gray20: { name: 'gray-20', value: '#cccccc' },
        gray30: { name: 'gray-30', value: '#b3b3b3' },
        gray46: { name: 'gray-46', value: '#898989' },
        gray60: { name: 'gray-60', value: '#666666' },
        gray75: { name: 'gray-75', value: '#3f3f3f' },
        gray80: { name: 'gray-80', value: '#333333' },
        gray84: { name: 'gray-84', value: '#292929' },
        gray87: { name: 'gray-87', value: '#212121' },
        gray92: { name: 'gray-92', value: '#141414' },
        gray100: { name: 'gray-100', value: '#000000' },
      }
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'dark',
    }),
  ],
};

export default preview;