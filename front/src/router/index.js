import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../components/views/Users.vue';
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Users}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
