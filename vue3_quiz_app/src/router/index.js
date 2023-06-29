import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizes',
      component: () => import('../views/Quizes.vue')
    },
    {
      path: '/quizes/:id',
      name: 'quiz',
      component: () => import('../views/Quiz.vue')
    },
    // 404 
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
