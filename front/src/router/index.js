import Vue from 'vue'
import VueRouter from 'vue-router'

import PermissionView from '../components/views/PermissionView.vue'

Vue.use(VueRouter)

const routes = [

  { path: "/", component: PermissionView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
