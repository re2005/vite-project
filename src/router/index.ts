import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>
                new Promise(resolve => resolve(defineAsyncComponent(() => import('../views/HomeView.vue')))),
        },
        {
            path: '/other',
            name: 'other',
            component: () =>
                new Promise(resolve => resolve(defineAsyncComponent(() => import('../views/OtherView.vue')))),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ],
});

export default router;
