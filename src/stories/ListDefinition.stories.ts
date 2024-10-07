// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '@components/ListDefinition.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/ListDefinition',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    listItems: [
      {
        name: 'Item 1',
        label: 'Item 1',
        value: 'Item 1',
      },
      {
        name: 'Item 2',
        label: 'Item 2',
        value: 'Item 2',
      },
      {
        name: 'Item 3',
        label: 'Item 3',
        value: 'Item 3',
      },
    ]
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const ListDefinition: Story = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'The default, ordered and unordered, lists are part of the content styling.'
      }
    }
  }
};