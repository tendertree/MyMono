import type { Preview } from '@storybook/react'
import '../app/globals.css';  // 상위 → app 폴더 접근
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
