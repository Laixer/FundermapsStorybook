<script setup lang="ts">
  import AccordionItem from './AccordionItem.vue'
  defineProps<{
    items: { id?: number, name: string, open: boolean }[],
    toggleCallback: (_: any) => void
  }>()
</script>

<template>
  <div class="accordion divide-y divide-grey-200">
    <AccordionItem v-for="item in items"
                   :title="item.name || ''"
                    :open="item.open"
                    @toggle="toggleCallback"
                   :key="`legend_${item.id || item.name}`">
      <slot name="item"
            v-bind="item">
            <p>Default content</p>
          </slot>
    </AccordionItem>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  :deep(summary) {
    @apply cursor-pointer;

    &:hover {
      @apply text-green-500;
    }
  }

  :deep(details:not([open])) {
    [data-show-open="true"] {
      @apply hidden;
    }
  }

  :deep(details[open]) {
    [data-show-open="false"] {
      @apply hidden;
    }

    .content {
      @apply pb-4;
    }
  }
}
</style>