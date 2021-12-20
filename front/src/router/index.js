import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../authentication/Sign_in.vue';
import Users from '../components/views/UsersView.vue';
import Student from '../components/views/StudentsView.vue';
import Permission from '../components/views/PermissionView.vue';
import Disciples from '../components/views/DisciplesView.vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/Signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/users',
    name: 'user',
    component: Users
  },
  {
    path: '/students',
    name: 'Student',
    component: Student
  },
  {
    path: '/permission',
    name: 'Permission',
    component: Permission
  },
  {
    path: '/disciples',
    name: 'Disciples',
    component: Disciples
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router