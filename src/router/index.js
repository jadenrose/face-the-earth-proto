import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shows from '../views/Shows.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Watch from '../views/Watch.vue'

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
    path: '/about',
    name: 'About',
    component: About
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
