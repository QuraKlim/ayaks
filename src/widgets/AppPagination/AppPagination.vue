<template>
    <div class="pagination">
        <div
            v-for="number in pagesList"
            :key="number"
            class="number"
            :class="{ active: number === page }"
            @click="$emit('update:modelValue', number)"
        >
            {{ number + 1 }}
        </div>
        <div
            v-if="(pagesList.at(-1) ?? 0) <= totalPages - 1"
            class="number"
            @click="$emit('update:modelValue', totalPages)"
        >
            ...
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { generatePagination } from './paginationPages';

const props = defineProps({
    page: {
        default: 0,
        type: Number,
    },
    totalPages: {
        default: 0,
        type: Number,
    },
});
defineEmits(['update:modelValue']);

const pagesList = computed(() => {
    return generatePagination(props.page, props.totalPages);
});
</script>

<style scoped>
.pagination {
    text-align: center;
    margin-top: 30px;
}
.number {
    padding: 10px;
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
    color: #fff;
}
.number.active {
    background-color: rgba(255, 255, 255, 0.233);
}
</style>
