import Vue from 'vue'
import VueRouter from 'vue-router'

import PermissionView from '../components/views/PermissionView.vue'
import PermissionForm from '../components/views/PermissionForm.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/permission", component: PermissionView },
  { path: "/permissionform", component: PermissionForm },
  { path: "/", component: PermissionView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
