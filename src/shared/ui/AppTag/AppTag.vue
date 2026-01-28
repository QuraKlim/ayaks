<template>
    <div class="tag">{{ name }}</div>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        default: '',
    },
});
</script>

<style scoped>
.tag {
    padding: 3px 5px;
    color: white;
    background-color: #5450cb;
    border-radius: 5px;
}
</style>
