import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: () => import('../pages/home.vue'),
    },
    {
        name: "luiza",
        path: "/luiza",
        component: () => import('../pages/luiza.vue'),
    }
];
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,
});

export default router;