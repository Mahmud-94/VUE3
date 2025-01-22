import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import RefPage from '@/views/RefPage.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import FormInputs from '@/views/FormInputs.vue'
import FlowerItems from '@/views/FlowerItems.vue'
import FlowerList from '@/views/FlowerList.vue'


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

    {
      path: '/puspa',
      name: 'puspa',
      component: FlowerItems,
    },

    {
      path: '/puspalist',
      name: 'puspalist',
      component: FlowerList,
    },
  ],
})

export default router
