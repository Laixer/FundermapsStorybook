// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '@components/ButtonComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/Buttons/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the primary button, this should be used for a call to action. A interface element, should contain 1 primary button.'
      }
    }
  }
};

export const Outline: Story = {
  args: {
    outline: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the outline button, this should be used for secondary actions. A interface element, should contain 1 primary button.'
      }
    }
  }
};

export const Muted: Story = {
  args: {
    muted: true
  },
};

export const Link: Story = {
  args: {
    link: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the link button, this should be used for tertiary actions. '
      }
    }
  }
};

// export const Large: Story = {
//   args: {
//     label: 'Button',
//     size: 'large',
//   },
// };

// export const Small: Story = {
//   args: {
//     label: 'Button',
//     size: 'small',
//   },
// };
