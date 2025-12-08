import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Boosters from '@/views/Boosters.vue'
import Collection from '@/views/Collection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/boosters',
      name: 'boosters',
      component: Boosters,
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection,
    },
  ],
})

export default router
