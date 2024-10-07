<script setup lang="ts">
import IconComponent from './IconComponent.vue';
import { IconMap } from '@/iconTypes'
defineProps<{
    name: IconMap['fundermaps']
}>()
</script>

<template>
    <IconComponent source="fundermaps" :name="name" />
</template>

<style scoped></style>