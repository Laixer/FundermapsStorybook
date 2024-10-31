<script setup lang="ts" generic="T extends keyof IconMap, U extends IconMap[T]">
  import { computed } from 'vue';
  import { IconMap } from '@/iconTypes';
  import { defineAsyncComponent } from 'vue';

  const { source, name } = defineProps<{ source: T, name: U, accent?: 'blue' | 'green' }>()

  const computedSource = computed(() => {
    return source === 'general' ? '' : `${source}/`
  })

  const icons = import.meta.glob<Record<string, ()=>void>>('@assets/svg/icons/**/*.svg');

  const icon = computed(() => {

    const iconKey = `/src/assets/svg/icons/${computedSource.value}${name}.svg`;

    return icons[iconKey] ? defineAsyncComponent(icons[iconKey]) : false;
  });

</script>

<template>
  <component :class="{[`accent-color-${accent}`]: accent}" v-if="icon" :is="icon" />
</template>