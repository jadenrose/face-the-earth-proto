import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Shows from '../views/shows/Shows.vue'
import Contact from '../views/contact/Contact.vue'
import Watch from '../views/watch/Watch.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
