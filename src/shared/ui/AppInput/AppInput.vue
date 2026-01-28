<template>
    <input
        id="search"
        class="input"
        :value="modelValue"
        placeholder="Поиск..."
        type="text"
        name="search"
        @input="
            $emit(
                'update:modelValue',
                ($event.target as HTMLInputElement).value,
            )
        "
    />
</template>

<script setup lang="ts">
defineEmits(['update:modelValue']);
defineProps<{
    modelValue: string;
}>();
</script>

<style scoped>
.input {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
}
</style>
