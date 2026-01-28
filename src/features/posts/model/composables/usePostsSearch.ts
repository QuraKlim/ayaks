import { ref, watch } from 'vue';
import type { IPost } from '~/entities/post';
import { debounce } from '~/shared/libs';

export function usePostsSearch() {
    const searchValue = ref('');
    const isLoading = ref(false);
    const result = ref<IPost[]>([]);
    const page = ref(0);
    const totalPages = ref(0);

    const postsPerPage = 20;

    const config = useRuntimeConfig();

    const fetchData = debounce(async (newSearchValue: string) => {
        if (newSearchValue.length) {
            try {
                const response = await fetch(
                    `${config.public.apiBase}/posts/search?q=${newSearchValue}&limit=${postsPerPage}&skip=${page.value * postsPerPage}`,
                );
                const data = await response.json();
                result.value = data.posts;
                totalPages.value = Math.floor(data.total / postsPerPage);
            } catch (error) {
                alert(error);
            } finally {
                isLoading.value = false;
            }
        } else {
            isLoading.value = false;
            result.value = [];
        }
    }, 500);

    watch(searchValue, () => {
        page.value = 0;
    });

    watch([searchValue, page], (newSearchValue) => {
        isLoading.value = true;
        fetchData(newSearchValue[0]);
    });

    return { searchValue, isLoading, result, page, totalPages };
}
