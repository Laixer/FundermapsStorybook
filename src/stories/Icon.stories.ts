// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import { IconMap, iconsMap } from '@/iconTypes';
import Icon from '@components/Icons/IconComponent.vue';

// const getNameOptions = (source: keyof IconMap) => {
//   return iconsMap[source] || [];
// };
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/Icons/Icon',
  component: Icon as Record<keyof typeof Icon, unknown>,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    source: 'general',
    name: 'checkbox',
    class: 'max-w-[100px]'
  },
  argTypes: {
    source: { 
      control: false,
      // control: 'select',
      // options: Object.keys(iconsMap) as Array<keyof typeof iconsMap>,
      description: 'Source of the icon',
      table: {
        type: { summary: 'T extends keyof IconMap' },
        defaultValue: { summary: 'general' },
      },
     },  // Disabling the `name` prop
     name: {
      description: 'Name of the icon',
      control: 'select',
      // options: ({source}: {source: keyof IconMap}) => iconsMap[source] || [],
      table: {
        type: { summary: 'U extends IconMap[T]' },
      }
     }
  },
  
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const General: Story = {
  argTypes: {
    name: {
      options: iconsMap['general']
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Main folder of icons'
      }
    }
  }
};
export const Facade: Story = {
  args: {
    name: 'voor',
    source: 'facade',
  },
  argTypes: {
    name: {
      options: iconsMap['facade']
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Set of icons for facades'
      }
    }
  }
};
export const Classification: Story = {
  args: {
    name: 'a',
    source: 'classification',
  },
  argTypes: {
    name: {
      options: iconsMap['classification']
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Set of icons for classifications'
      }
    }
  }
};
export const Foundation: Story = {
  args: {
    name: 'betonnen-palen',
    source: 'foundation',
  },
  argTypes: {
    name: {
      options: iconsMap['foundation']
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Set of icons for foundations'
      }
    }
  }
};
export const Fundermaps: Story = {
  args: {
    name: 'file-foundation',
    source: 'fundermaps',
  },
  argTypes: {
    name: {
      options: iconsMap['foundation']
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Set of icons for foundations'
      }
    }
  }
};