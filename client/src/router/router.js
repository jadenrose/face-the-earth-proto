import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home/Home.vue'
import Shows from '../views/shows/Shows.vue'
import Contact from '../views/contact/Contact.vue'
import Watch from '../views/watch/Watch.vue'

export const routes = [
    {
        id: 'r0',
        path: '/',
        name: 'Home',
        text: 'home',
        component: Home,
    },
    {
        id: 'r1',
        path: '/shows',
        name: 'Shows',
        text: 'our shows',
        component: Shows,
    },
    {
        id: 'r2',
        path: '/contact',
        name: 'Contact',
        text: 'book us',
        component: Contact,
    },
    {
        id: 'r3',
        path: '/watch',
        name: 'Watch',
        text: 'watch us',
        component: Watch,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
