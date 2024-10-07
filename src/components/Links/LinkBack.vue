<script setup lang="ts">
    import LinkComponent from './LinkComponent.vue';
    import BackArrowIcon from '@components/Icons/BackArrowIcon.vue';

    defineProps<{
        label: string,
        link?: string
    }>()
</script>

<template>
    <LinkComponent :label="label" :link="link" outline>
        <template #prefix>
            <BackArrowIcon />
        </template>
    </LinkComponent>
</template>

<style lang="scss" scoped>
:deep(.link__label) {
    font-weight: bold;
}
</style>