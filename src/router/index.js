import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/adminpage',
    name: 'admin page',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/homepage',
    name: 'home page',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/property:id',
    name: 'single properties page',
    component: () => import('../views/Property.vue'),
    props: true,
  },
  {
    path: '/properties',
    name: 'All properties page',
    component: () => import('../views/Properties.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
