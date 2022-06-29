import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // http://localhost:4000/
      name: 'home',
      component: HomeView
    },
    {
      path: '/personajes', // http://localhost:4000/personajes
      name: 'personajes',
      component: () => import('../views/Personajes.vue')
    },
    {
      path: '/personajes/:personaje', // :personaje === this.$route.params.personaje
      name: 'personaje',
      component: () => import('../views/Personaje.vue')
    }
  ]
})

export default router
