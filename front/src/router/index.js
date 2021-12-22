import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../authentication/Sign_in.vue';
import Users from '../components/views/UsersView.vue';
import Student from '../components/views/StudentCrudView.vue';
import Permission from '../components/views/PermissionView.vue';
import Disciples from '../components/views/DisciplesView.vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/Signin',
    component: Signin
  },
  {
    path: '/',
    component: Signin
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/studentcrudview',
    component: Student
  },
  {
    path: '/permission',
    component: Permission
  },
  {
    path: '/disciples',
    component: Disciples
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router