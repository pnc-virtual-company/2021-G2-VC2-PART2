// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes = [
  
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import {createRouter, createWebHistory} from 'vue-router';
import SignIn from '../authentication/Sign_in.vue';
const routes = [
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router