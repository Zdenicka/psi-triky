import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTrik from '../views/AddTrik.vue'
import EditTrik from '../views/EditTrik.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddTrik',
    component: AddTrik
  },
  {
    path: '/triky/:id',
    name: 'EditTrik',
    component: EditTrik,
    props: true
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
