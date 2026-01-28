<template>
    <div v-if="isLoading" class="loader_wrapper">
        <img :src="loadingIcon" class="loader" />
    </div>
    <slot v-else />
</template>

<script setup lang="ts">
import loadingIcon from '~/shared/icons/loading.svg';
defineProps({
    isLoading: Boolean,
});
</script>

<style scoped>
.loader {
    width: 100px;
}
.loader_wrapper {
    margin-top: 50px;
    text-align: center;
}
</style>
