<script setup lang="ts">
type DefinitionListItem = {
    name: string
    label: string
    value: string
}
    defineProps<{listItems: DefinitionListItem[]}>();
</script>
<template>
    <dl role="list"
        class="list--definition">
        <div class="item" v-for="item in listItems" :key="item.name">
            <dt>{{ item.label }}</dt>
            <dd>
                {{ item.value }}
            </dd>
        </div>
        
    </dl>
</template>

<style lang="scss" scoped>

.item {
    @apply flex items-baseline justify-between gap-3;
}
dd {
    @apply text-end leading-loose text-grey-700;
}
</style>