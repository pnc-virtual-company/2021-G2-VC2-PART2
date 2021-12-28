import Vue from 'vue'
import VueRouter from 'vue-router'
import Disciple from '../components/views/DiscipleView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Disciple
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
