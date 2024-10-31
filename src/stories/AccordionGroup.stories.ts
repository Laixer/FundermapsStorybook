// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import AccordionGroup from '@components/Accordion/AccordionGroup.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Library/AccordionGroup',
  component: AccordionGroup,
  // 
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    items: [{
      id: 1,
      name: 'Item 1',
      open: false
    }, {
      id: 2,
      name: 'Item 2',
      open: false
    }, {
      id: 3,
      name: 'Item 3',
      open: true
    }],
    toggleCallback: (id: number) => {
      console.log('toggleCallback', id);
    } 
  }
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
      components: { AccordionGroup },
      setup() {
        return { args };
      },
      template:`
        <AccordionGroup v-bind="args">
          <template #item="item">
            <p>This is content for: {{ item.name }}</p>
          </template>
        </AccordionGroup>
      `,
    }),
  parameters: {
    docs: {
      description: {
        story: 'Accordion group is a component that can be used to show and hide content. It is a collection of accordion items.'
      },
      source: {
        code: `
<AccordionGroup :items="items" :toggleCallback="toggleCallback">
  <template #item="{ name }">
    <p>This is content for: {{ name }}</p>
  </template>
</AccordionGroup>
        `,
      },
    }
  }
};