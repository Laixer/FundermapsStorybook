<script setup lang="ts">
// import LoadingIndicator from '@/components/Branding/LoadingIndicator.vue';
import AnimatedArrowIcon from '@components/Icons/AnimatedArrowIcon.vue';
import { computed } from 'vue';
import LinkComponent from './LinkComponent.vue';
import FundermapsIcon from '@components/Icons/FundermapsIcon.vue';
import {IconMap} from '@/iconTypes';

const {disabled, loading} = defineProps<{
    label: string,
    link?: string,
    loading?: boolean,
    disabled?: boolean
    icon: IconMap['fundermaps']
}>()

const classList = computed<string[]>(() => {
  let list: string[] = []

  if (disabled) {
    list.push('disabled')
    list.push('text-gray-700')
  }
  if (loading) {
    list.push('loading')
  }
  return list
})

classList
</script>

<template>
  <!-- <a 
    href="#" 
    class="flex link link--outline | group px-4 py-3 "
    :class="classList">
    <slot />
    <span>{{ label }}</span>
    <AnimatedArrowIcon v-if="! loading && ! disabled" />
  
    <LoadingIndicator 
      v-if="loading"
      class="grow flex items-end"
      :hideLabel="true"
      :small="true" />
  </a> -->

  <LinkComponent :label="label" :link="link" outline :class="classList">
    <template #prefix>
        <!-- <slot name="prefix" /> -->
        <FundermapsIcon class="accent-color-blue aspect-square w-6" :name="icon"></FundermapsIcon>
    </template>
    <template #suffix>
      <AnimatedArrowIcon v-if="! loading && ! disabled" />
    </template>
  </LinkComponent>
</template>

<style lang="scss" scoped>
.link {
    @apply px-4 py-3;
}

.link--outline.disabled {
  cursor: not-allowed;
  background: rgb(232 234 241 / var(--tw-border-opacity));
}
.link--outline.disabled:hover {
  border-color: rgb(232 234 241 / var(--tw-border-opacity));
  box-shadow: none;
}
.grow {
  flex-grow: 1;
}
.items-end {
  align-items: flex-end;
}
.link--outline.loading {
  cursor: wait;
}

</style>