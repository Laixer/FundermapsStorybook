// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import LinkBack from '@components/Links/LinkBack.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/Links/LinkBack',
  component: LinkBack,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    label: 'Link tekst',
    link: 'https://www.google.com'
  }
} satisfies Meta<typeof LinkBack>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'Link back component'
      }
    }
  }
};