import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import RefPage from '@/views/RefPage.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import FormInputs from '@/views/FormInputs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    

    {
      path: '/ref',
      name: 'ref',
      component: RefPage,
    },

    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle,
    },

    {
      path: '/form',
      name: 'form',
      component: FormInputs,
    },
  ],
})

export default router
