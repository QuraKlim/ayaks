<template>
    <app-post :item="tableItem" />
</template>

<script setup lang="ts">
import { AppPost } from '~/entities/post';

defineProps({
    tableItem: {
        type: null,
        default: {},
    },
});
</script>
