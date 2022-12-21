import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('./pages/dashboard.vue')
    },
    {
        path: '/',
        name: 'Contact',
        component: () => import('./pages/contact.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


