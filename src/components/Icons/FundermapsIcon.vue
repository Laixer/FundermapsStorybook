<script setup lang="ts">
import IconComponent from './IconComponent.vue';
import { IconMap } from '@/iconTypes'
defineProps<{
    name: IconMap['fundermaps'],
    accent?: 'blue' | 'green'
}>()
</script>

<template>
    <IconComponent source="fundermaps" :accent="accent" :name="name" />
</template>

<style scoped></style>