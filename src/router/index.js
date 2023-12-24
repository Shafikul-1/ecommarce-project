import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/service',
      name: 'service',
      component: () => import('@/views/ServiceView.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: ()=> import('@/views/PricingView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('@/views/ContactView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=> import('@/views/NotFoundView.vue') },
  ]
})

export default router
