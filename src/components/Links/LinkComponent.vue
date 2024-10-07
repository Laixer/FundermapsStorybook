<script setup lang="ts">
    defineProps<{
      link?: string, 
      label: string
      outline?: boolean
      }>()
</script>

<template>
    <a :href="link ?? `javascript:void(0)`" class="link | group" :class="{['link--outline']: outline}">
        <slot name="prefix"></slot>
        <span class="link__label">{{ label }}</span>
        <slot name="suffix"></slot>
    </a>
</template>

<style scoped>

.link {
  @apply inline-flex cursor-pointer items-center gap-2.5 disabled:pointer-events-none disabled:cursor-default;
}

.link:not(.link--outline) {
  @apply text-green-500 hover:text-green-700;
}

.link--outline {
  @apply rounded border border-grey-200 px-2.5 py-1 hover:border-transparent hover:bg-white hover:shadow-lg;
}

</style>