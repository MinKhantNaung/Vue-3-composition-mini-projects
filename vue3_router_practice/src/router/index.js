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
    // redirecting
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cars/:id',
      name: 'car',
      component: () => import('../views/CarView.vue'),
      children: [
        {
          path: 'contact',
          component: () => import('../views/Contact.vue')
        }
      ]
    },
    // for not exist routes
    {
      path: '/:pathMatch(.*)*',
      name: '404NotFound',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
