<script setup lang="ts">
    type ColorValue =
  | `#${string}` // Hex color (e.g. "#ff0000")
  | `rgb(${number},${number},${number})` // RGB color (e.g. "rgb(255,0,0)")
  | `rgba(${number},${number},${number},${number})` // RGBA color (e.g. "rgba(255,0,0,0.5)")
  | `hsl(${number},${number}%,${number}%)` // HSL color (e.g. "hsl(0,100%,50%)")
  | `hsla(${number},${number}%,${number}%,${number})` // HSLA color (e.g. "hsla(0,100%,50%,0.5)")
  ; // Named colors (e.g. "red", "blue", "transparent", etc.)
    defineProps<{items: {name: string, color: ColorValue}[]}>();
</script>

<template>
    <ol class="list--legenda">
        <li :style="`--marker-color: ${item.color}`" v-for="item in items" :key="`field-${item.name}`">
            {{ item.name }}
        </li>
    </ol>
</template>

<style lang="scss" scoped>
.list--legenda {
  @apply ml-0 space-y-2;

  li {
    @apply flex items-baseline gap-2.5;

    &::before {
      content: "";

      @apply h-2.5 w-2.5 rounded-full;

      background-color: var(--marker-color);
    }
  }
}
</style>