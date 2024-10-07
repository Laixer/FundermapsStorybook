// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import ListLegenda from '@components/ListLegenda.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/ListLegenda',
  component: ListLegenda,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    items: [{
      name: 'Monitoring',
      color: '#b54cb0'
    },
    {
      name: 'Notitie',
      color: '#8c4bb6'
    },
    {
      name: 'Snelle scan',
      color: '#5b4ab7'
    },
    ]
  }
} satisfies Meta<typeof ListLegenda>;

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
        story: 'The default, ordered and unordered, lists are part of the content styling.'
      }
    }
  }
};