<template>
    <div class="list">
        <h2 v-if="noItemsMessage" class="no_items">{{ noItemsMessage }}</h2>
        <div v-else>
            <div
                v-for="(item, index) in items"
                :key="getKey(item, index)"
                class="base-list__item"
            >
                <slot name="item" :item="item" :index="index" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IListItem } from './types';

defineProps<{
    noItemsMessage: string | null;
    items: IListItem[];
    getKey: (item: IListItem, index: number) => string | number;
}>();
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.no_items {
    color: white;
    text-align: center;
}
</style>
