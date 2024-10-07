// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import LinkMenu from '@components/Links/LinkMenu.vue';
import { FundermapsIcon } from '@/iconTypes';

const iconOptions: FundermapsIcon[] = ['alert', 'align-front', 'apps', 'bell', 'building', 'calendar', 'chat', 'circle-check', 'circle-minus', 'circle-plus', 'email', 'file-foundation', 'file-pdf', 'file-report', 'foundation', 'graph', 'home-info', 'home', 'image', 'info', 'lock', 'map', 'pin', 'report', 'reports', 'scan', 'search', 'settings', 'signal', 'target', 'times', 'tools', 'trash', 'wrench'];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/Links/LinkMenu',
  component: LinkMenu,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    icon: 'home',
    label: 'Link tekst',
    link: 'https://www.google.com'
  },
  argTypes: {
    icon: {
      options: iconOptions satisfies FundermapsIcon[],
      description: 'Icon to display',
      table: {
        type: { summary: 'FundermapsIcon' },
      },
      control: {
        type: 'select',
      },
    }
  },
} satisfies Meta<typeof LinkMenu>;

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
        story: 'Menu link component'
      }
    }
  }
};