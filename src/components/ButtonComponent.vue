
<script setup lang="ts">
import { computed } from 'vue';

/**
 * This is the basic button.
 *  It has slots that can be used to add an icon before or after the label
 *  It has various styling toggles, which should not be used together. 
 */
type BaseProps = {
    label?: string
    disabled?: boolean
    muted?: boolean
    outline?: boolean
    link?: boolean
}

const {label = 'Button', link, muted, outline} = defineProps<BaseProps>()

const btnClass = computed<string[]>(() => {

  // Link & outline & muted are mutually exclusive
  if (link) {
    return [ "button--link" ]
  }

  // Link & outline & muted are mutually exclusive
  else if (outline) {
    return [ "button--outline", "group" ]
  }

  // Link & outline & muted are mutually exclusive
  else if (muted) {
    return [
      "button--muted", "group" ]
  }

  // Basic primary button 
  return [ "button--solid", "group" ]
})
</script>

<template>
  <button class="button" :class="btnClass" :disabled="disabled">
    <slot name="before" />
    <span class="button__label">{{ label }}</span>
    <slot name="after" />
  </button>
</template>


<style scoped>

.button {
  @apply inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-solid border-transparent px-5 py-2.5 font-extrabold leading-none disabled:pointer-events-none disabled:cursor-default;
}

.button--solid,
.button--muted {
  @apply bg-green-500 text-white hover:bg-green-700 hover:shadow-hover disabled:bg-grey-400;
}

.button--muted {
  @apply bg-grey-700 hover:bg-red-500
}

.button--outline {
  @apply border-current text-green-500 hover:border-transparent hover:bg-green-700 hover:text-white hover:shadow-hover disabled:text-grey-400;
}

.button--link {
  @apply rounded-md px-0 text-green-500 outline-offset-2 hover:text-green-700 disabled:text-grey-400;
}

.button--icon {
  @apply rounded-full p-2;
}

.button--square {
  @apply relative rounded border bg-grey-200 p-2.5 text-grey-800 hover:border-green-500 hover:bg-white hover:text-green-500;
}

</style>