

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FoodItem from './views/FoodItem.vue'
import ProductItem from './components/ProductItem.vue'
import TodoItem from './components/TodoItem.vue'



const app = createApp(App)

app.component('food-item', FoodItem)
app.component('product-item',ProductItem)
app.component('todo-item',TodoItem)

app.use(router)

app.mount('#app')
