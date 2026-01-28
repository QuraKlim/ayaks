<template>
    <app-container class="main_page_container">
        <app-input v-model="searchValue" />
        <app-loader :is-loading="isLoading">
            <app-list
                v-if="!isLoading"
                class="list"
                :items="result"
                :get-key="(item) => item.id"
                :no-items-message="
                    isNoItems
                        ? 'Нет результатов, удовлетворяющих запросу'
                        : null
                "
            >
                <template #item="{ item, index }">
                    <table-item
                        class="table_item"
                        :table-item="item"
                        :index="index"
                    />
                </template>
            </app-list>
            <app-pagination
                v-if="result && result.length"
                v-model="page"
                :page="page"
                :total-pages="totalPages"
            />
        </app-loader>
    </app-container>
</template>

<script setup lang="ts">
import { AppContainer, AppInput, AppList, AppLoader } from '~/shared/ui';
import { TableItem } from '~/features/posts/ui';
import { ref, watch } from 'vue';
import { usePostsSearch } from '~/features/posts';
import { AppPagination } from '~/widgets/AppPagination';

const isNoItems = ref(false);

const { searchValue, isLoading, result, page, totalPages } = usePostsSearch();

watch([result, searchValue], () => {
    isNoItems.value = Boolean(!result.value.length && searchValue.value.length);
});
</script>

<style scoped>
.main_page_container {
    padding: 50px 0;
}
.table {
    margin-top: 50px;
    font-size: 20px;
}
.table_item {
    display: block;
    padding: 10px 15px;
    margin-top: 15px;
    border: 1px solid white;
    border-radius: 5px;
    color: #fff;
}
.list {
    margin-top: 40px;
}
</style>
