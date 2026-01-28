<template>
    <div class="item" @click="isOpened = !isOpened">
        <p class="header">
            {{
                item.title +
                (item.title.substr(item.title.length - 1) === '.' ? '' : '...')
            }}
        </p>
        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-if="isOpened" class="text">
                <p class="expanded">{{ item.body }}</p>
                <div class="additional">
                    <div class="reactions">
                        <div>
                            <img :src="views" alt="views" />
                            {{ item.views }}
                        </div>
                        <div>
                            <img :src="like" alt="likes" />
                            {{ item.reactions.likes }}
                        </div>
                        <div>
                            <img
                                style="transform: rotate(180deg)"
                                :src="like"
                                alt="dislikes"
                            />
                            {{ item.reactions.dislikes }}
                        </div>
                    </div>
                    <div class="tags">
                        <app-tag
                            v-for="tag in item.tags"
                            :key="tag"
                            :name="tag"
                        />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, type TransitionHooks } from 'vue';
import views from '~/shared/icons/views.svg';
import like from '~/shared/icons/like.svg';
import { AppTag } from '~/shared/ui';
import type { IPost } from '../model/types';

const isOpened = ref(false);

const beforeEnter: TransitionHooks['beforeEnter'] = (el) => {
    el.style.height = '0px';
};

const enter: TransitionHooks['enter'] = (el) => {
    el.style.height = el.scrollHeight + 'px';
};

const leave: TransitionHooks['leave'] = (el) => {
    el.style.height = '0px';
};

defineProps<{ item: IPost }>();
</script>

<style scoped>
.text {
    overflow: hidden;
    transition: height 0.3s ease;
}
.item {
    cursor: pointer;
}
.header {
    font-size: 20px;
}
.expanded {
    margin-top: 20px;
}
.additional {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.tags {
    display: flex;
    gap: 12px;
}
.reactions {
    display: flex;
    align-items: center;
    gap: 10px;
}
.reactions > div {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>
