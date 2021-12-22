import Vue from 'vue'
import VueRouter from 'vue-router'

import StudentCrudView from '../components/views/StudentCrudView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'studentcrudview',
    component: StudentCrudView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
