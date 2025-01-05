import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodItem from '@/views/FoodItem.vue'
import Todolist from '@/views/Todolist.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'Food',
      component: FoodItem,
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: Todolist,
    },
  ],
})

export default router
